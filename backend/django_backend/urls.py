from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny
from django.contrib.auth import views as auth_views # Standard auth views
from ipo_portal import views as ipo_views # Custom views from ipo_portal

schema_view = get_schema_view(
    openapi.Info(title="Public API", default_version='v1'),
    public=True,
    permission_classes=[AllowAny],
)

urlpatterns = [
    # Custom login for IPO portal users, potentially overriding admin login if LOGIN_URL is set
    path('admin/ipo-login/', ipo_views.IPOLoginView.as_view(), name='ipo_admin_login'),

    # Standard Django admin URLs (if you want to keep them separate or for other purposes)
    # path('admin/', admin.site.urls), # This would typically include the original admin:login

    # App-specific URLs
    path('auth/', include('authentication.urls')), # Assuming this is for other auth parts like password reset
    path('api/', include('public_api.urls')),
    path('api/governance/', include('governance.urls')),
    path('admin/ipo-portal/', include('ipo_portal.urls')), # App's own features like 2FA setup

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),
]

# To effectively override the default admin login (admin:login), you would typically:
# 1. Create a custom AdminSite class.
# 2. Set its `login_view` attribute to your IPOLoginView.
# 3. Instantiate your custom AdminSite and use it instead of django.contrib.admin.site.
# For this iteration, we provide a distinct URL 'admin/ipo-login/'.
# If LOGIN_URL in settings.py is changed to 'ipo_admin_login', this view will be used globally for @login_required.

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # Add staticfiles serving for development if not already handled by runserver or whitenoise for /static/
    # urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
