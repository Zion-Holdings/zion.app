from django.core.management.base import BaseCommand
from django.contrib.auth.models import Group

class Command(BaseCommand):
    help = 'Creates the default groups for the IPO portal'

    GROUP_NAMES = ['Superadmin', 'Finance', 'Legal', 'CEO']

    def handle(self, *args, **options):
        for group_name in self.GROUP_NAMES:
            group, created = Group.objects.get_or_create(name=group_name)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Successfully created group "{group_name}"'))
            else:
                self.stdout.write(self.style.WARNING(f'Group "{group_name}" already exists'))

        # Additionally, ensure UserProfile roles and Group names are somewhat aligned.
        # This command primarily ensures Groups exist.
        # Mapping users to groups and UserProfile roles will be handled elsewhere,
        # but it's good to note the intended correspondence.

        self.stdout.write(self.style.SUCCESS('Finished creating/verifying groups.'))
