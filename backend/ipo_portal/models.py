from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('SUPERADMIN', 'Superadmin'),
        ('FINANCE', 'Finance'),
        ('LEGAL', 'Legal'),
        ('CEO', 'CEO'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    is_2fa_enabled = models.BooleanField(default=False)
    otp_secret_key = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"


class MonthlyKPI(models.Model):
    month = models.DateField(help_text="First day of the month for which KPIs are recorded.")
    mrr = models.DecimalField(max_digits=12, decimal_places=2, help_text="Monthly Recurring Revenue")
    gmv = models.DecimalField(max_digits=12, decimal_places=2, help_text="Gross Marketplace Volume")
    active_users_monthly = models.IntegerField(help_text="Monthly Active Users")
    churn_rate = models.DecimalField(max_digits=5, decimal_places=2, help_text="Monthly churn rate (e.g., 2.5 for 2.5%)")
    cac = models.DecimalField(max_digits=10, decimal_places=2, help_text="Customer Acquisition Cost")
    ltv = models.DecimalField(max_digits=10, decimal_places=2, help_text="Customer Lifetime Value")
    retention_cohort_data = models.JSONField(default=dict, blank=True, help_text="Cohort retention data")
    global_user_breakdown = models.JSONField(default=dict, blank=True, help_text="User breakdown by region/segment")
    # Add more fields as necessary, e.g., created_at, updated_at

    class Meta:
        ordering = ['-month']
        verbose_name = "Monthly KPI"
        verbose_name_plural = "Monthly KPIs"
        # Ensures that you don't have multiple KPI entries for the same month.
        # This requires month to be consistently stored e.g. as the 1st of the month.
        unique_together = [['month']] # Simpler if month is just DateField for 1st of month.
        # If you need to ensure month and year uniqueness more explicitly and month field could be any day:
        # constraints = [
        #     models.UniqueConstraint(fields=[models.functions.ExtractYear('month'), models.functions.ExtractMonth('month')],
        #                             name='unique_kpi_month_year')
        # ]
        # However, unique_together with a DateField representing 1st of month is common.

    def __str__(self):
        return f"KPIs for {self.month.strftime('%Y-%m')}"


class Document(models.Model):
    SECTION_CHOICES = [
        ('FINANCIALS', 'Financials'),
        ('CAP_TABLE', 'Cap Table'),
        ('LEGAL_DOCS', 'Legal Documents'),
        ('STRATEGIC_PARTNERSHIPS', 'Strategic Partnerships'),
        ('PRESS_COVERAGE_PR_KIT', 'Press Coverage & PR Kit'),
        ('OTHER', 'Other') # Added an Other category
    ]

    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='ipo_portal_documents/', max_length=255) # Increased max_length for longer paths/names
    section = models.CharField(max_length=50, choices=SECTION_CHOICES)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='uploaded_documents'
    )

    class Meta:
        ordering = ['-uploaded_at']
        verbose_name = "Document"
        verbose_name_plural = "Documents"

    def __str__(self):
        return self.title

    @property
    def filename(self):
        import os
        return os.path.basename(self.file.name)


from django.utils import timezone

class InvestorUpdate(models.Model):
    title = models.CharField(max_length=255)
    publication_date = models.DateField(default=timezone.now)
    summary = models.TextField()
    kpis_snapshot = models.JSONField(blank=True, null=True, help_text="Snapshot of key KPIs at the time of this update.")
    author = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='authored_investor_updates'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    # Add last_modified_at = models.DateTimeField(auto_now=True) if needed

    class Meta:
        ordering = ['-publication_date', '-created_at']
        verbose_name = "Investor Update"
        verbose_name_plural = "Investor Updates"

    def __str__(self):
        return f"{self.title} ({self.publication_date.strftime('%Y-%m-%d')})"

import uuid

class EmailOpenTrack(models.Model):
    update = models.ForeignKey(InvestorUpdate, on_delete=models.CASCADE, related_name='email_tracks')
    # recipient_email is optional because we are using BCC for the initial send.
    # If we switch to individual emails, this field would be populated.
    recipient_email = models.EmailField(null=True, blank=True, help_text="Specific recipient if known, otherwise tracks the send batch.")
    tracking_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    opened_at = models.DateTimeField(null=True, blank=True, help_text="Timestamp of the first open.")
    first_opened_ip = models.GenericIPAddressField(null=True, blank=True, help_text="IP address of the first open.")
    user_agent = models.CharField(max_length=255, null=True, blank=True, help_text="User agent of the client that opened the email.")
    created_at = models.DateTimeField(auto_now_add=True) # When the tracking record was created / email sent

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Email Open Track"
        verbose_name_plural = "Email Open Tracks"

    def __str__(self):
        return f"Track for '{self.update.title}' sent at {self.created_at.strftime('%Y-%m-%d %H:%M')} - ID: {self.tracking_id}"
