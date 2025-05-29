from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import CustomUser, Profile

@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=CustomUser)
def save_user_profile(sender, instance, **kwargs):
    # In case the profile needs to be saved whenever the user is saved,
    # though for simple creation, the first receiver is enough.
    # If Profile had its own fields that might depend on User fields
    # being updated later, this could be useful.
    # For now, this might be redundant if Profile has no fields other than user link.
    # However, it's a common pattern.
    try:
        instance.profile.save()
    except Profile.DoesNotExist:
        # This case should be handled by create_user_profile if 'created' is true.
        # If for some reason profile doesn't exist (e.g. existing users before this signal),
        # you might want to create it here too.
        Profile.objects.create(user=instance)
