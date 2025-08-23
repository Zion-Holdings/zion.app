from django.urls import path
from . import views

app_name = 'ipo_portal'

urlpatterns = [
    # Main portal sections
    path('', views.dashboard_view, name='dashboard'), # Default to dashboard
    path('dashboard/', views.dashboard_view, name='dashboard_explicit'), # Explicit dashboard URL
    path('data-room/', views.data_room_view, name='data_room'),
    path('investor-updates/', views.investor_updates_view, name='investor_updates'),
    path('investor-updates/create/', views.create_investor_update_view, name='create_investor_update'),
    path('investor-updates/<int:pk>/edit/', views.edit_investor_update_view, name='edit_investor_update'),
    path('investor-updates/<int:pk>/delete/', views.delete_investor_update_view, name='delete_investor_update'),
    path('investor-updates/<int:pk>/pdf/', views.investor_update_pdf_view, name='investor_update_pdf'),
    path('investor-updates/<int:update_pk>/send-email/', views.send_investor_update_email_view, name='send_investor_update_email'),
    path('deal-room/', views.deal_room_view, name='deal_room'),

    # Tracking pixel URL
    path('track/open/<uuid:tracking_id>/pixel.gif', views.track_email_open_view, name='track_email_open'),

    # 2FA specific URLs
    path('setup-2fa/', views.setup_2fa, name='setup_2fa'),
    path('confirm-2fa/', views.confirm_2fa_view, name='2fa_confirmed'),
    path('verify-otp/', views.verify_otp, name='verify_otp'),
]
