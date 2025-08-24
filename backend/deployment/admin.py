from django.contrib import admin
from .models import ZionInstance, Module, InstanceModuleRel, BrandingAsset

@admin.register(ZionInstance)
class ZionInstanceAdmin(admin.ModelAdmin):
    list_display = ('name', 'subdomain', 'owner', 'status', 'governance_mode', 'token_activation', 'created_at', 'updated_at')
    list_filter = ('status', 'governance_mode', 'token_activation', 'deployment_region', 'default_language')
    search_fields = ('name', 'subdomain', 'owner__username') # Assuming owner has a username field
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        (None, {
            'fields': ('name', 'subdomain', 'owner', 'status')
        }),
        ('Configuration', {
            'fields': ('default_language', 'deployment_region', 'token_activation', 'governance_mode')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

@admin.register(InstanceModuleRel)
class InstanceModuleRelAdmin(admin.ModelAdmin):
    list_display = ('instance', 'module', 'is_bonus', 'activated_at')
    list_filter = ('is_bonus', 'module')
    search_fields = ('instance__name', 'module__name')
    autocomplete_fields = ('instance', 'module') # For easier selection in admin

@admin.register(BrandingAsset)
class BrandingAssetAdmin(admin.ModelAdmin):
    list_display = ('instance', 'asset_type', 'file_path', 'uploaded_at')
    list_filter = ('asset_type',)
    search_fields = ('instance__name', 'asset_type')
    autocomplete_fields = ('instance',)

# If you prefer simple registration without custom admin classes:
# admin.site.register(ZionInstance)
# admin.site.register(Module)
# admin.site.register(InstanceModuleRel)
# admin.site.register(BrandingAsset)
