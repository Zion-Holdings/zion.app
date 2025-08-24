from django import forms
from .models import Document

class DocumentForm(forms.ModelForm):
    class Meta:
        model = Document
        fields = ['title', 'file', 'section']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter document title'}),
            'file': forms.FileInput(attrs={'class': 'form-control-file'}),
            'section': forms.Select(attrs={'class': 'form-control'}),
        }

    def __init__(self, *args, **kwargs):
        user = kwargs.pop('user', None) # Get user from kwargs, remove before calling super
        super().__init__(*args, **kwargs)

        self.fields['file'].required = True

        # Dynamically filter section choices based on user's permissions
        if user:
            allowed_section_ids = []
            if user.is_superuser:
                allowed_section_ids = [choice[0] for choice in Document.SECTION_CHOICES]
            else:
                try:
                    user_role = user.profile.role
                    if user_role:
                        # Using SECTION_ROLE_PERMISSIONS from permissions.py - requires import
                        from .permissions import SECTION_ROLE_PERMISSIONS
                        for section_id, allowed_roles in SECTION_ROLE_PERMISSIONS.items():
                            if user_role in allowed_roles:
                                allowed_section_ids.append(section_id)
                except AttributeError: # User has no profile or role
                    pass # No sections allowed, or handle as per policy

            # Filter the choices for the 'section' field
            self.fields['section'].choices = [
                choice for choice in Document.SECTION_CHOICES if choice[0] in allowed_section_ids
            ]
            if not self.fields['section'].choices:
                 # No sections available for this user to upload to.
                 # Optionally disable the field or provide a message.
                 # For now, an empty choice list will make the field unusable or show no options.
                 # Consider raising a validation error if form submitted with no valid section,
                 # or handling this in the view.
                 self.fields['section'].widget.attrs['disabled'] = True # Example
                 self.fields['section'].help_text = "You do not have permission to upload to any section."


        # Clean up default help texts for other fields if desired
        for field_name, field in self.fields.items():
            if field_name != 'section': # Keep our potentially modified help_text for section
                 field.help_text = None
            if field_name == 'file' and not field.help_text: # If not set by section logic
                 field.help_text = Document._meta.get_field('file').help_text


from .models import InvestorUpdate
from django.forms.widgets import DateInput, Textarea

class InvestorUpdateForm(forms.ModelForm):
    class Meta:
        model = InvestorUpdate
        fields = ['title', 'publication_date', 'summary', 'kpis_snapshot']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Update Title'}),
            'publication_date': DateInput(attrs={'class': 'form-control', 'type': 'date'}),
            'summary': Textarea(attrs={'class': 'form-control', 'rows': 5, 'placeholder': 'Enter a summary for the update'}),
            'kpis_snapshot': Textarea(attrs={'class': 'form-control', 'rows': 3, 'placeholder': 'Enter KPIs as JSON, e.g., {"MRR": 10000, "Active Users": 500}'}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Customize help texts or make fields not required if needed
        self.fields['kpis_snapshot'].required = False
        self.fields['kpis_snapshot'].help_text = 'Optional. Provide relevant KPIs for this update as a JSON object.'
        self.fields['publication_date'].help_text = 'Defaults to today if left blank.'
        # Remove other default help texts for a cleaner form
        for field_name, field in self.fields.items():
            if field_name not in ['kpis_snapshot', 'publication_date']:
                field.help_text = None

class SendUpdateEmailForm(forms.Form):
    investor_emails = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 3, 'class': 'form-control', 'placeholder': 'Enter comma-separated email addresses'}),
        help_text="Provide a list of investor email addresses, separated by commas."
    )
    subject = forms.CharField(max_length=255, widget=forms.TextInput(attrs={'class': 'form-control'}))
    message = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 10, 'class': 'form-control'}),
        help_text="This message will be the body of the email. The PDF update will be attached automatically."
    )

    def clean_investor_emails(self):
        emails_raw = self.cleaned_data.get('investor_emails', '')
        email_list = [email.strip() for email in emails_raw.split(',') if email.strip()]
        # Add further validation for each email if needed, e.g., using EmailValidator
        # from django.core.validators import EmailValidator
        # validator = EmailValidator()
        # for email in email_list:
        #     try:
        #         validator(email)
        #     except forms.ValidationError:
        #         raise forms.ValidationError(f"Invalid email address: {email}")
        if not email_list:
            raise forms.ValidationError("Please provide at least one recipient email address.")
        return email_list
