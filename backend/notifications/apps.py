from django.apps import AppConfig

class NotificationsConfig(AppConfig):
    name = 'backend.notifications'

    def ready(self):
        from . import signals  # noqa
