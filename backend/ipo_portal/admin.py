from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'is_2fa_enabled')
    list_filter = ('role', 'is_2fa_enabled')
    search_fields = ('user__username', 'user__email')

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.select_related('user')

from .models import MonthlyKPI

@admin.register(MonthlyKPI)
class MonthlyKPIAdmin(admin.ModelAdmin):
    list_display = ('month', 'mrr', 'gmv', 'active_users_monthly', 'churn_rate', 'cac', 'ltv')
    list_filter = ('month',)
    search_fields = ('month',)
    ordering = ('-month',)

    fieldsets = (
        (None, {
            'fields': ('month', ('mrr', 'gmv'), ('active_users_monthly', 'churn_rate'), ('cac', 'ltv'))
        }),
        ('Advanced Data (JSON)', {
            'classes': ('collapse',), # Make JSON fields collapsible
            'fields': ('retention_cohort_data', 'global_user_breakdown'),
        }),
    )

    def get_readonly_fields(self, request, obj=None):
        # Make month readonly after creation to prevent breaking uniqueness easily
        if obj:
            return self.readonly_fields + ('month',)
        return self.readonly_fields

from .models import Document

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'section', 'uploaded_at', 'uploaded_by', 'filename')
    list_filter = ('section', 'uploaded_at', 'uploaded_by')
    search_fields = ('title', 'file', 'uploaded_by__username')
    readonly_fields = ('uploaded_at', 'uploaded_by', 'filename')
    ordering = ('-uploaded_at',)

    def save_model(self, request, obj, form, change):
        if not obj.pk: # If creating new object
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)

    def filename(self, obj): # To display in list_display
        return obj.filename
    filename.short_description = "File Name"

from .models import InvestorUpdate

@admin.register(InvestorUpdate)
class InvestorUpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'publication_date', 'author', 'created_at')
    list_filter = ('publication_date', 'author')
    search_fields = ('title', 'summary', 'author__username')
    readonly_fields = ('author', 'created_at') # Author set automatically
    ordering = ('-publication_date',)
    fieldsets = (
        (None, {
            'fields': ('title', 'publication_date', 'summary')
        }),
        ('KPI Snapshot (JSON)', {
            'classes': ('collapse',),
            'fields': ('kpis_snapshot',),
        }),
        # Author and created_at are usually set automatically and made readonly
        # ('Authorship', {
        #     'fields': (('author', 'created_at'),)
        # })
    )

    def save_model(self, request, obj, form, change):
        if not obj.pk: # If creating new object
            obj.author = request.user
        super().save_model(request, obj, form, change)

from .models import EmailOpenTrack

@admin.register(EmailOpenTrack)
class EmailOpenTrackAdmin(admin.ModelAdmin):
    list_display = ('update', 'tracking_id', 'opened_at', 'first_opened_ip', 'user_agent', 'created_at', 'recipient_email')
    list_filter = ('opened_at', 'created_at', 'update__title') # Filter by update title
    search_fields = ('tracking_id', 'recipient_email', 'first_opened_ip', 'user_agent', 'update__title')
    readonly_fields = ('tracking_id', 'opened_at', 'first_opened_ip', 'user_agent', 'created_at', 'update', 'recipient_email')
    ordering = ('-created_at',)

    def has_add_permission(self, request):
        return False # These records are created programmatically

    def has_change_permission(self, request, obj=None):
        return False # Typically, these records should be immutable once created/recorded
