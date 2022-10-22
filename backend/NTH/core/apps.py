from django.apps import AppConfig


class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'

    # Scheduler code
    def ready(self):
        print("ready")
        from .extra_key_scheduler import key_updater
        key_updater.start()