import json
from django.core.management.base import BaseCommand
from categories_app.models import Category # Ensure this import path is correct

# Category data, similar to what was in prisma/seed.ts
CATEGORIES_DATA = [
    { 'id': 'services', 'name': 'Services', 'slug': 'services', 'icon': 'Briefcase', 'active': True },
    { 'id': 'talents', 'name': 'Talents', 'slug': 'talents', 'icon': 'Users', 'active': True },
    { 'id': 'equipment', 'name': 'Equipment', 'slug': 'equipment', 'icon': 'HardDrive', 'active': True },
    { 'id': 'innovation', 'name': 'Innovation', 'slug': 'innovation', 'icon': 'Lightbulb', 'active': True },
]

class Command(BaseCommand):
    help = 'Seeds the database with initial categories'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Seeding categories...'))

        for cat_data in CATEGORIES_DATA:
            category, created = Category.objects.update_or_create(
                slug=cat_data['slug'], # Use slug as the unique identifier for finding existing records
                defaults={
                    'name': cat_data['name'],
                    'icon': cat_data['icon'],
                    'active': cat_data['active'],
                    # 'id' from CATEGORIES_DATA is not used here as Django uses auto-incrementing PK by default.
                    # If you need to preserve specific IDs from the original seed, the model needs to be adjusted.
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Successfully created category: {category.name}'))
            else:
                self.stdout.write(self.style.WARNING(f'Category {category.name} already exists, updated.'))

        self.stdout.write(self.style.SUCCESS('Finished seeding categories.'))
