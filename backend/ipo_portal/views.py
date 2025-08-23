from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth import login as auth_login
from django.contrib.auth.views import LoginView
from django.contrib.auth.models import User, Group
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import get_object_or_404
from .models import UserProfile, MonthlyKPI, Document, InvestorUpdate
from .forms import DocumentForm, InvestorUpdateForm
from .permissions import SECTION_ROLE_PERMISSIONS, can_manage_investor_updates, is_portal_user # Ensure is_portal_user is imported if used directly
from django_otp.plugins.otp_totp.models import TOTPDevice
from django_otp.oath import TOTP
from django.conf import settings
from django.template.loader import render_to_string # For rendering HTML to string for PDF
from django.utils.text import slugify # For filename generation

# WeasyPrint import - will only be attempted if function is called
# This allows app to run if WeasyPrint is not installed for other functionalities
try:
    from weasyprint import HTML as WeasyHTML
except ImportError:
    WeasyHTML = None # Or handle error more explicitly if PDF is critical

import qrcode
import qrcode.image.svg
from io import BytesIO

@login_required
def setup_2fa(request):
    user = request.user
    try:
        user_profile = user.profile
    except UserProfile.DoesNotExist:
        user_profile = UserProfile.objects.create(user=user)

    if user_profile.is_2fa_enabled:
        # Potentially redirect to a page saying 2FA is already active
        return render(request, 'ipo_portal/2fa_already_enabled.html')

    # Check if there's an existing unconfirmed device
    device = TOTPDevice.objects.filter(user=user, confirmed=False).first()
    if not device:
        device = TOTPDevice.objects.create(user=user, name=f"{user.username}'s TOTP Device", confirmed=False)

    # Store the secret key in UserProfile for potential recovery or re-setup scenarios, though not strictly needed for verification if device exists
    # The key from device.key is already base32 encoded.
    user_profile.otp_secret_key = device.key
    user_profile.save()

    # Generate QR code
    qr_url = device.config_url  # This generates something like otpauth://totp/Example:alice@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example

    img = qrcode.make(qr_url, image_factory=qrcode.image.svg.SvgImage)
    qr_code_svg = img.to_string().decode('utf-8')


    if request.method == 'POST':
        otp_code = request.POST.get('otp_code')
        if otp_code:
            # Verify the OTP against the *unconfirmed* device
            if device.verify_token(otp_code):
                device.confirmed = True
                device.save()
                user_profile.is_2fa_enabled = True
                user_profile.save()
                # Log in the user with the OTP device if it's part of a specific workflow
                # For now, just confirming the setup
                return redirect('ipo_portal:2fa_confirmed')
            else:
                # Handle invalid OTP
                return render(request, 'ipo_portal/setup_2fa.html', {
                    'qr_code_svg': qr_code_svg,
                    'error': 'Invalid OTP. Please try again.'
                })
        else:
            # Handle missing OTP
             return render(request, 'ipo_portal/setup_2fa.html', {
                'qr_code_svg': qr_code_svg,
                'error': 'Please enter the OTP code from your authenticator app.'
            })


    return render(request, 'ipo_portal/setup_2fa.html', {'qr_code_svg': qr_code_svg})

@login_required
def confirm_2fa_view(request): # Renamed to avoid conflict if we have a different confirm_2fa function
    # This view is mostly handled by the POST request in setup_2fa.
    # It could be a separate page if setup_2fa only displays QR and this one handles POST.
    # For now, it just renders a success page.
    return render(request, 'ipo_portal/2fa_confirmed.html')


# No @login_required here, as user isn't fully logged in yet.
def verify_otp(request):
    user_pk = request.session.get('2fa_user_pk')
    if not user_pk:
        return redirect(settings.LOGIN_URL) # Or your custom login URL

    try:
        user = User.objects.get(pk=user_pk)
        user_profile = user.profile # Assumes UserProfile related_name is 'profile'
        if not user_profile.is_2fa_enabled:
            # This case should ideally be caught by IPOLoginView.
            # If reached, it means 2FA was disabled after password auth but before OTP.
            # Log them in directly or redirect.
            auth_login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            if '2fa_user_pk' in request.session: del request.session['2fa_user_pk']
            if '2fa_username' in request.session: del request.session['2fa_username']
            return redirect(settings.LOGIN_REDIRECT_URL)
    except (User.DoesNotExist, UserProfile.DoesNotExist):
        # Invalid session data or user/profile deleted in interim.
        if '2fa_user_pk' in request.session: del request.session['2fa_user_pk']
        if '2fa_username' in request.session: del request.session['2fa_username']
        return redirect(settings.LOGIN_URL)

    device = TOTPDevice.objects.filter(user=user, confirmed=True).first()
    if not device:
        # No confirmed OTP device found for the user, despite is_2fa_enabled being true.
        # This is an inconsistent state. Redirect to 2FA setup or show an error.
        # For now, redirect to login, clearing session vars.
        if '2fa_user_pk' in request.session: del request.session['2fa_user_pk']
        if '2fa_username' in request.session: del request.session['2fa_username']
        # Consider adding a message: "2FA configuration error. Please contact support or try re-setting up 2FA."
        return redirect(settings.LOGIN_URL)

    if request.method == 'POST':
        otp_code = request.POST.get('otp_code')
        if otp_code:
            if device.verify_token(otp_code):
                # OTP is valid. Log the user in.
                auth_login(request, user, backend='django.contrib.auth.backends.ModelBackend')
                request.session['2fa_verified'] = True
                if '2fa_user_pk' in request.session: del request.session['2fa_user_pk']
                if '2fa_username' in request.session: del request.session['2fa_username']

                next_url = request.GET.get('next', settings.LOGIN_REDIRECT_URL)
                return redirect(next_url)
            else:
                # Invalid OTP
                return render(request, 'ipo_portal/otp_entry.html', {
                    'error': 'Invalid OTP. Please try again.',
                    'username': request.session.get('2fa_username') # For display
                })
        else:
            # OTP code not provided
            return render(request, 'ipo_portal/otp_entry.html', {
                'error': 'Please enter your OTP.',
                'username': request.session.get('2fa_username')
            })

    return render(request, 'ipo_portal/otp_entry.html', {'username': request.session.get('2fa_username')})


class IPOLoginView(LoginView):
    template_name = 'admin/login.html' # Or your portal's specific login template

    def form_valid(self, form):
        user = form.get_user()

        # Ensure UserProfile exists, create if not.
        # Default role 'FINANCE' is a placeholder. Adjust as needed.
        user_profile, created = UserProfile.objects.get_or_create(
            user=user,
            defaults={'is_2fa_enabled': False, 'role': 'FINANCE'}
        )

        if user_profile.is_2fa_enabled:
            # Check for a confirmed TOTP device. If none, 2FA shouldn't block login.
            # This is a safeguard against being locked out if device was deleted but is_2fa_enabled is still True.
            if not TOTPDevice.objects.filter(user=user, confirmed=True).exists():
                user_profile.is_2fa_enabled = False # Correct the state
                user_profile.otp_secret_key = None
                user_profile.save()
                # Log in directly
                auth_login(request, user, backend='django.contrib.auth.backends.ModelBackend')
                return super().form_valid(form)


            # Store user's pk in session to retrieve in verify_otp view
            self.request.session['2fa_user_pk'] = user.pk
            self.request.session['2fa_username'] = user.username # For display purposes on OTP page

            # Redirect to OTP verification page
            # Make sure 'ipo_portal:verify_otp' is a valid resolvable URL name
            return HttpResponseRedirect(redirect('ipo_portal:verify_otp').url)
        else:
            # 2FA is not enabled, proceed with standard login.
            # Need to explicitly log in the user here because super().form_valid() might not if just returning success_url
            auth_login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
            return super().form_valid(form)


# --- IPO Portal Main Views ---

# is_portal_user is now imported from .permissions

# This function can be used if other views need an even more specific check later.
# For now, is_portal_user is the main gate.
# def is_superadmin_or_specific_group(user):
#     if not user.is_authenticated:
#         return False
#     return user.is_superuser or user.groups.filter(name='Superadmin').exists()


@login_required
@user_passes_test(is_portal_user, login_url='admin:login') # Redirect to admin login if test fails
def dashboard_view(request):
    # This view will also serve as the main page for /admin/ipo-portal/ if user is authorized
    # The user_passes_test above handles the authorization.

    # Order by month descending to easily get the latest for "latest KPI cards"
    # Charts will need data typically in ascending order of time, so we can reverse in template or pass two versions.
    # For simplicity now, let's pass descending and chart JS can handle data if it's not pre-sorted,
    # or we can pass a reversed list for charts.
    all_kpis_desc = MonthlyKPI.objects.all().order_by('-month')

    # For charts, data is usually time-ascending. Create a reversed version or slice and reverse.
    kpis_for_charts = list(all_kpis_desc)
    kpis_for_charts.reverse()


    latest_kpi = all_kpis_desc.first()

    context = {
        'monthly_kpis_desc': all_kpis_desc, # For table display, latest first
        'monthly_kpis_asc': kpis_for_charts,  # For chart.js, oldest first
        'latest_kpi': latest_kpi, # For dedicated cards showing latest JSON data
        'page_title': 'Dashboard Overview'
    }
    return render(request, 'ipo_portal/dashboard.html', context)

@login_required
@user_passes_test(is_portal_user, login_url='admin:login')
def data_room_view(request):
    user = request.user
    user_role = None
    if not user.is_superuser:
        try:
            user_role = user.profile.role
        except UserProfile.DoesNotExist:
            # User has no profile, therefore no specific role other than potentially being a superuser (already checked)
            # They will only see sections allowed for users with no specific role, if any, or none.
            pass # user_role remains None

    if request.method == 'POST':
        # Pass user to form to filter section choices for upload
        form = DocumentForm(request.POST, request.FILES, user=user)
        if form.is_valid():
            document = form.save(commit=False)
            document.uploaded_by = user
            # Check if the user is allowed to upload to the selected section (form should already restrict choices)
            # This is an additional backend check.
            selected_section_id = form.cleaned_data['section']
            allowed_upload_sections_for_user = []
            if user.is_superuser:
                allowed_upload_sections_for_user = [s[0] for s in Document.SECTION_CHOICES]
            elif user_role:
                 for section_id_perm, roles in SECTION_ROLE_PERMISSIONS.items():
                    if user_role in roles:
                        allowed_upload_sections_for_user.append(section_id_perm)

            if selected_section_id not in allowed_upload_sections_for_user:
                # Handle unauthorized upload attempt, though form choices should prevent this.
                # Can add a form error: form.add_error('section', "You are not allowed to upload to this section.")
                # For now, assume form correctly restricts choices.
                pass # Or raise PermissionDenied

            document.save()
            return redirect('ipo_portal:data_room')
    else:
        # Pass user to form to filter section choices for display
        form = DocumentForm(user=user)

    # Filter documents by section based on user's role
    documents_by_section_filtered = {}
    all_documents = Document.objects.select_related('uploaded_by').order_by('-uploaded_at')

    for doc in all_documents:
        section_id = doc.section
        section_display_name = dict(Document.SECTION_CHOICES).get(section_id, section_id)

        if user.is_superuser:
            if section_display_name not in documents_by_section_filtered:
                documents_by_section_filtered[section_display_name] = []
            documents_by_section_filtered[section_display_name].append(doc)
        elif user_role:
            allowed_roles_for_section = SECTION_ROLE_PERMISSIONS.get(section_id, [])
            if user_role in allowed_roles_for_section:
                if section_display_name not in documents_by_section_filtered:
                    documents_by_section_filtered[section_display_name] = []
                documents_by_section_filtered[section_display_name].append(doc)
        # Else (not superuser and no role): user sees no documents unless specific sections are opened up.
        # Currently, no sections are open by default if user_role is None and not superuser.

    context = {
        'document_form': form,
        'documents_by_section': documents_by_section_filtered, # Pass filtered list
        'page_title': 'Data Room'
    }
    return render(request, 'ipo_portal/data_room.html', context)

@login_required
@user_passes_test(is_portal_user, login_url='admin:login')
def investor_updates_view(request):
    updates = InvestorUpdate.objects.select_related('author').all()
    context = {
        'investor_updates': updates,
        'can_manage': can_manage_investor_updates(request.user), # Pass permission to template
        'page_title': 'Investor Updates'
    }
    return render(request, 'ipo_portal/investor_updates.html', context)

@login_required
@user_passes_test(can_manage_investor_updates, login_url='ipo_portal:investor_updates') # Redirect to list if no perm
def create_investor_update_view(request):
    if request.method == 'POST':
        form = InvestorUpdateForm(request.POST)
        if form.is_valid():
            update = form.save(commit=False)
            update.author = request.user
            update.save()
            # messages.success(request, "Investor update created successfully.")
            return redirect('ipo_portal:investor_updates')
    else:
        form = InvestorUpdateForm()
    context = {
        'form': form,
        'page_title': 'Create New Investor Update',
        'form_title': 'Create Investor Update',
        'form_button_text': 'Create Update'
    }
    return render(request, 'ipo_portal/investor_update_form.html', context)

@login_required
@user_passes_test(can_manage_investor_updates, login_url='ipo_portal:investor_updates')
def edit_investor_update_view(request, pk):
    update = get_object_or_404(InvestorUpdate, pk=pk)
    if request.method == 'POST':
        form = InvestorUpdateForm(request.POST, instance=update)
        if form.is_valid():
            form.save() # Author is not changed on edit
            # messages.success(request, "Investor update updated successfully.")
            return redirect('ipo_portal:investor_updates')
    else:
        form = InvestorUpdateForm(instance=update)
    context = {
        'form': form,
        'update_id': pk, # For form action URL
        'page_title': f'Edit Update: {update.title}',
        'form_title': 'Edit Investor Update',
        'form_button_text': 'Save Changes'
    }
    return render(request, 'ipo_portal/investor_update_form.html', context)

@login_required
@user_passes_test(can_manage_investor_updates, login_url='ipo_portal:investor_updates')
def delete_investor_update_view(request, pk):
    update = get_object_or_404(InvestorUpdate, pk=pk)
    if request.method == 'POST':
        update.delete()
        # messages.success(request, "Investor update deleted successfully.")
        return redirect('ipo_portal:investor_updates')
    context = {
        'update': update,
        'page_title': f'Confirm Delete: {update.title}'
    }
    return render(request, 'ipo_portal/investor_update_confirm_delete.html', context)

@login_required
@user_passes_test(is_portal_user, login_url='admin:login') # General portal access
def investor_update_pdf_view(request, pk):
    if WeasyHTML is None:
        return HttpResponse("PDF generation library (WeasyPrint) is not installed.", status=501)

    update = get_object_or_404(InvestorUpdate, pk=pk)

    # Render HTML content from template to a string
    # Ensure 'is_dict' can be used or implement it if needed in template context for PDF
    context = {'update': update} # Add any other context needed for the PDF template
    html_string = render_to_string('ipo_portal/investor_update_pdf_template.html', context)

    # Generate PDF
    pdf_file = WeasyHTML(string=html_string, base_url=request.build_absolute_uri('/')).write_pdf()

    # Create HTTP response
    response = HttpResponse(pdf_file, content_type='application/pdf')
    filename = slugify(f"investor_update_{update.title}_{update.publication_date.strftime('%Y-%m-%d')}") + ".pdf"
    response['Content-Disposition'] = f'attachment; filename="{filename}"' # Suggest to download
    # Use 'inline' instead of 'attachment' if you want browser to try displaying it:
    # response['Content-Disposition'] = f'inline; filename="{filename}"'

    return response


@login_required
@user_passes_test(is_portal_user, login_url='admin:login')
def deal_room_view(request):
    return render(request, 'ipo_portal/deal_room.html')


# Helper function for PDF generation (refactored)
def _generate_investor_update_pdf_bytes(request, update_obj):
    if WeasyHTML is None:
        raise ImportError("WeasyPrint is not installed. PDF generation disabled.")

    context = {'update': update_obj}
    html_string = render_to_string('ipo_portal/investor_update_pdf_template.html', context)
    # base_url is important for resolving relative paths for images/CSS if any are used from static files
    return WeasyHTML(string=html_string, base_url=request.build_absolute_uri('/')).write_pdf()

# Modify existing PDF download view to use the helper
@login_required
@user_passes_test(is_portal_user, login_url='admin:login') # General portal access
def investor_update_pdf_view(request, pk):
    update = get_object_or_404(InvestorUpdate, pk=pk)
    try:
        pdf_file = _generate_investor_update_pdf_bytes(request, update)
        response = HttpResponse(pdf_file, content_type='application/pdf')
        filename = slugify(f"investor_update_{update.title}_{update.publication_date.strftime('%Y-%m-%d')}") + ".pdf"
        response['Content-Disposition'] = f'attachment; filename="{filename}"'
        return response
    except ImportError:
        return HttpResponse("PDF generation library (WeasyPrint) is not installed or failed to import.", status=501)
    except Exception as e: # Catch other potential errors during PDF generation
        # Log the error e
        return HttpResponse(f"Error generating PDF: {e}", status=500)


from django.core.mail import EmailMessage
from django.contrib import messages
from django.urls import reverse # For generating tracking pixel URL
from django.utils import timezone # For track_email_open_view

@login_required
@user_passes_test(can_manage_investor_updates, login_url='ipo_portal:investor_updates')
def send_investor_update_email_view(request, update_pk):
    update = get_object_or_404(InvestorUpdate, pk=update_pk)

    if request.method == 'POST':
        form = SendUpdateEmailForm(request.POST, initial={'subject': update.title, 'message': update.summary})
        if form.is_valid():
            subject = form.cleaned_data['subject']
            message_body = form.cleaned_data['message'] # Custom message from form
            investor_emails_raw = form.cleaned_data['investor_emails']
            recipient_list = [email.strip() for email in investor_emails_raw.split(',') if email.strip()]

            if not recipient_list:
                messages.error(request, "No recipient email addresses provided.")
            else:
                try:
                    pdf_content = _generate_investor_update_pdf_bytes(request, update)
                    pdf_filename = slugify(f"investor_update_{update.title}_{update.publication_date.strftime('%Y-%m-%d')}") + ".pdf"

                    # Create EmailOpenTrack instance for this send action
                    track_instance = EmailOpenTrack.objects.create(update=update)
                    tracking_pixel_url = request.build_absolute_uri(
                        reverse('ipo_portal:track_email_open', args=[track_instance.tracking_id])
                    )

                    # Construct HTML content with tracking pixel
                    # The plain text message_body is used as a base, then HTML wrapper is added.
                    html_content = f"""
                    <html>
                        <head></head>
                        <body>
                            <p>{message_body.replace(chr(10), "<br>")}</p>
                            <img src="{tracking_pixel_url}" width="1" height="1" alt="" />
                        </body>
                    </html>
                    """

                    email = EmailMessage(
                        subject,
                        message_body, # Plain text body
                        settings.DEFAULT_FROM_EMAIL,
                        bcc=recipient_list,
                    )
                    email.attach_alternative(html_content, "text/html") # Add HTML version
                    email.attach(pdf_filename, pdf_content, 'application/pdf')
                    email.send(fail_silently=False)

                    messages.success(request, f"Emails sent successfully to {len(recipient_list)} address(es) with PDF attachment and tracking pixel.")
                    return redirect('ipo_portal:investor_updates')
                except ImportError:
                    messages.error(request, "PDF generation library (WeasyPrint) is not installed. Email not sent.")
                except Exception as e:
                    # Log the error e for debugging
                    messages.error(request, f"An error occurred: {e}")
        # else: form is invalid, will be re-rendered with errors
    else:
        # Pre-fill form for GET request
        initial_data = {
            'subject': f"Investor Update: {update.title}",
            'message': f"Dear Investor,\n\nPlease find attached our latest update: '{update.title}'.\n\nSummary:\n{update.summary}\n\nBest regards,\n[Your Company Name]",
            # 'investor_emails': "test1@example.com, test2@example.com" # For testing
        }
        form = SendUpdateEmailForm(initial=initial_data)

    context = {
        'form': form,
        'update': update,
        'page_title': f"Send Email for Update: {update.title}",
    }
    return render(request, 'ipo_portal/send_update_email_form.html', context)


# Tracking pixel view
def track_email_open_view(request, tracking_id):
    try:
        track_instance = EmailOpenTrack.objects.get(tracking_id=tracking_id)
        if not track_instance.opened_at: # Record only the first open
            track_instance.opened_at = timezone.now()
            track_instance.first_opened_ip = request.META.get('REMOTE_ADDR')
            track_instance.user_agent = request.META.get('HTTP_USER_AGENT', '')[:255] # Truncate if necessary
            track_instance.save(update_fields=['opened_at', 'first_opened_ip', 'user_agent'])
    except EmailOpenTrack.DoesNotExist:
        # Tracking ID not found, do nothing or log an error
        pass
        # Optionally: raise Http404 if you want to indicate the resource doesn't exist,
        # but for a pixel, failing silently is common.

    # Return a 1x1 transparent GIF
    pixel_gif = b'\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x80\x00\x00\x00\x00\x00\xff\xff\xff\x21\xf9\x04\x01\x00\x00\x00\x00\x2c\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x02\x44\x01\x00\x3b'
    return HttpResponse(pixel_gif, content_type='image/gif')
