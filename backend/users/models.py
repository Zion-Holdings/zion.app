from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def _create_user(self, email, password, is_staff, is_superuser, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            date_joined=timezone.now(),
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        return self._create_user(email, password, False, False, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        return self._create_user(email, password, True, True, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, max_length=255)
    full_name = models.CharField(max_length=255, blank=True, null=True)
    
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name'] # Often full_name is required, adjust if not

    def __str__(self):
        return self.email

    # For case-insensitive email uniqueness, we rely on overriding the manager's
    # methods or ensuring that normalize_email does what we need.
    # Django's BaseUserManager.normalize_email by default lowercases the domain part.
    # For full case-insensitivity, we'd typically handle it at the form/serializer level
    # or by ensuring email is saved in a consistent case (e.g., lowercased) in the manager.
    # The unique=True on EmailField will enforce uniqueness based on how the DB stores it.
    # Most DBs are case-sensitive by default for unique constraints on text fields.
    # To achieve true case-insensitive uniqueness at DB level, this might need
    # a custom DB constraint or always saving email in lowercase via the manager.
    # For now, normalize_email provides some level of standardization.
    # The task asks for "unique email (case-insensitive)".
    # We will ensure this at the serializer/view level by querying with __iexact
    # and by saving normalized (e.g., lowercased) emails.
    # The CustomUserManager's normalize_email helps here.

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    # Add any other profile fields here if needed later, e.g.:
    # bio = models.TextField(blank=True, null=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.email}'s Profile"
