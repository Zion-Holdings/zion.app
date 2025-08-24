from django.db import models
from django.conf import settings

class ZionInstance(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('deploying', 'Deploying'),
        ('active', 'Active'),
        ('failed', 'Failed'),
    ]
    GOVERNANCE_CHOICES = [
        ('admin', 'Admin'),
        ('dao', 'DAO'),
        ('hybrid', 'Hybrid'),
    ]

    name = models.CharField(max_length=255)
    subdomain = models.CharField(max_length=100, unique=True)
    default_language = models.CharField(max_length=10, default='en') # e.g., 'en', 'es'
    deployment_region = models.CharField(max_length=50) # e.g., 'us-east-1', 'eu-west-2'
    token_activation = models.BooleanField(default=False)
    governance_mode = models.CharField(max_length=50, choices=GOVERNANCE_CHOICES)

    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='zion_instances'
    )

    def __str__(self):
        return f"{self.name} ({self.subdomain})"

class Module(models.Model):
    name = models.CharField(max_length=255, unique=True) # e.g., "/marketplace", "/gpt"
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class InstanceModuleRel(models.Model):
    instance = models.ForeignKey(ZionInstance, on_delete=models.CASCADE)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    is_bonus = models.BooleanField(default=False) # To distinguish auto-deploy vs bonus
    activated_at = models.DateTimeField(null=True, blank=True) # When this specific module was activated/deployed for the instance

    class Meta:
        unique_together = ('instance', 'module') # Ensure a module is associated only once per instance
        verbose_name = "Instance Module Relationship"
        verbose_name_plural = "Instance Module Relationships"

    def __str__(self):
        return f"{self.instance.name} - {self.module.name} ({'Bonus' if self.is_bonus else 'Auto-Deploy'})"

class BrandingAsset(models.Model):
    ASSET_TYPE_CHOICES = [
        ('logo', 'Logo'),
        ('color_palette', 'Color Palette'), # Expects JSON data or path to JSON file
    ]

    instance = models.ForeignKey(ZionInstance, on_delete=models.CASCADE, related_name='branding_assets')
    asset_type = models.CharField(max_length=50, choices=ASSET_TYPE_CHOICES)
    # Storing the file path; actual file storage would be handled by a service like S3/Supabase Storage.
    # For local dev, this could be a path relative to MEDIA_ROOT.
    file_path = models.CharField(max_length=512)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('instance', 'asset_type') # e.g., an instance can only have one logo
        verbose_name = "Branding Asset"
        verbose_name_plural = "Branding Assets"

    def __str__(self):
        return f"{self.instance.name} - {self.get_asset_type_display()}"
