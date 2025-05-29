from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Profile

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    # Add or customize fields displayed in the admin list and forms
    list_display = ['email', 'full_name', 'is_staff', 'is_active', 'date_joined']
    search_fields = ['email', 'full_name']
    ordering = ['email']
    
    # If using the default UserAdmin forms, these fieldsets might need adjustment
    # especially if 'username' is not a field in CustomUser.
    # For CustomUser with email as USERNAME_FIELD:
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('full_name',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'full_name', 'password', 'password2'), # Add password2 for confirmation on add form
        }),
    )
    # Note: `add_form` might need to be customized if using AbstractBaseUser extensively for the add user page.
    # For now, relying on UserAdmin defaults and fieldset adjustments.

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'user_email'] # Example field, assuming user_email is a method on Profile model or direct field
    search_fields = ['user__email', 'user__full_name']

    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'Email'


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Profile, ProfileAdmin)
