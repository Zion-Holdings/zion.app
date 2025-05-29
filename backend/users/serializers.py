from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework import serializers
from .models import CustomUser # Assuming CustomUser is in the same app's models

UserModel = get_user_model()

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True, label="Confirm password")
    full_name = serializers.CharField(required=True, max_length=255) # Ensure full_name is handled

    class Meta:
        model = UserModel
        fields = ('email', 'full_name', 'password', 'password2')
        extra_kwargs = {
            'email': {'required': True},
        }

    def validate_email(self, value):
        # Ensure email is unique case-insensitively
        # Django's normalize_email (used by BaseUserManager) lowercases the domain part.
        # We should store emails in a consistent case, e.g., fully lowercased.
        normalized_email = UserModel.objects.normalize_email(value).lower()
        if UserModel.objects.filter(email__iexact=normalized_email).exists():
            raise serializers.ValidationError("A user with that email address already exists.")
        return normalized_email

    def validate(self, attrs):
        # Check that the two password entries match
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password2": "Password fields didn't match."})
        
        # Password strength validation (using Django's built-in validators)
        # The `validators=[validate_password]` on the password field already handles this.
        # If validate_password throws a DjangoValidationError, DRF will convert it.
        # We can add more custom checks here if needed.
        # For Task 2 (422 with {field, message}): DRF handles this format by default
        # when serializers.ValidationError is raised with a dictionary.

        return attrs

    def create(self, validated_data):
        # Remove password2 from validated_data as it's not part of the User model
        validated_data.pop('password2')
        
        # Use the custom user manager's create_user method
        # This ensures password hashing and other manager logic is applied.
        # The email is already normalized and checked for uniqueness in validate_email.
        user = UserModel.objects.create_user(
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            password=validated_data['password']
        )
        return user
