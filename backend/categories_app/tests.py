# backend/categories_app/tests.py
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Category
from django.contrib.auth import get_user_model

User = get_user_model()

class CategoryViewSetTests(APITestCase):

    @classmethod
    def setUpTestData(cls):
        cls.active_category1 = Category.objects.create(name='Active Category 1', slug='active-cat-1', icon='icon1', active=True)
        cls.active_category2 = Category.objects.create(name='Active Category 2', slug='active-cat-2', icon='icon2', active=True)
        cls.inactive_category1 = Category.objects.create(name='Inactive Category 1', slug='inactive-cat-1', icon='icon-inactive', active=False)

        # Note: The URL name is typically 'modelname-list' if basename is not overridden in the router.
        # If router.register(r'categories', CategoryViewSet, basename='category') was used, then 'category-list' is correct.
        cls.categories_url = reverse('category-list')

        cls.user = User.objects.create_user(username='testuser', password='testpassword123')

    def setUp(self):
        # This method is called before each test.
        # Re-fetch active categories if they might be modified by tests like test_list_categories_empty
        # Order by slug to ensure consistent ordering for comparisons if needed, though set comparisons are used for slugs.
        self.active_categories = Category.objects.filter(active=True).order_by('slug')


    def test_list_categories_unauthenticated(self):
        response = self.client.get(self.categories_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(len(response.data), self.active_categories.count())

        expected_slugs = {cat.slug for cat in self.active_categories}
        response_slugs = {item['slug'] for item in response.data}
        self.assertEqual(response_slugs, expected_slugs)

        # Verify structure and content of the first active category from setUp
        if self.active_categories.exists():
            first_active_cat_in_db = self.active_categories.first()
            # Find the corresponding item in the response (response.data is not ordered predictably by default)
            response_item = next((item for item in response.data if item['slug'] == first_active_cat_in_db.slug), None)

            self.assertIsNotNone(response_item)
            self.assertEqual(response_item['name'], first_active_cat_in_db.name)
            self.assertEqual(response_item['icon'], first_active_cat_in_db.icon)
            # The 'active' field is part of the serializer, so it should be present.
            # CategoryViewSet queryset is Category.objects.filter(active=True)
            self.assertTrue(response_item['active'])

    def test_list_categories_authenticated(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.categories_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), self.active_categories.count())

        expected_slugs = {cat.slug for cat in self.active_categories}
        response_slugs = {item['slug'] for item in response.data}
        self.assertEqual(response_slugs, expected_slugs)
        self.client.force_authenticate(user=None) # Clean up authentication

    def test_list_categories_empty_when_all_are_inactive(self):
        # Make all categories inactive for this test
        Category.objects.all().update(active=False)

        response = self.client.get(self.categories_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 0)

        # Restore active state for categories defined in setUpTestData so other tests are not affected
        # This is important because setUpTestData runs once per class, not per test.
        # Changes made here would persist across test methods if not reverted.
        # However, self.active_categories in setUp will re-query, so this might only be needed
        # if tests directly use cls.active_category1 etc. and expect their original state.
        # For safety and clarity:
        if hasattr(self, 'active_category1_original_active_state'): # Check if we saved it
             CategoryViewSetTests.active_category1.active = self.active_category1_original_active_state
             CategoryViewSetTests.active_category1.save()
        if hasattr(self, 'active_category2_original_active_state'):
             CategoryViewSetTests.active_category2.active = self.active_category2_original_active_state
             CategoryViewSetTests.active_category2.save()
        # A simpler approach is to rely on setUp to refresh instance variables like self.active_categories.
        # The main concern is if other tests use Category.objects.filter(active=True) and expect the setUpTestData state.
        # Since setUp runs before each test and re-queries self.active_categories, direct state restoration
        # of cls.active_category1 might not be strictly necessary for self.active_categories,
        # but it's good practice if the cls-level objects are ever used directly after this test.
        # For this test structure, relying on setUp to refresh self.active_categories is fine.
        # To be absolutely safe if cls.active_category1 itself was used elsewhere:
        CategoryViewSetTests.active_category1.active = True; CategoryViewSetTests.active_category1.save()
        CategoryViewSetTests.active_category2.active = True; CategoryViewSetTests.active_category2.save()


    def test_list_categories_empty_when_no_categories_exist(self):
        # Delete all categories for this test
        Category.objects.all().delete()

        response = self.client.get(self.categories_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 0)

        # No need to restore here, as setUpTestData will run again if a new class instance is made,
        # or for a new test class. Data is typically rolled back or reset between test classes.
        # For tests within the same class, data modifications should be mindful of other tests or use setUp.
        # Since these are APITestCase, database is usually reset per test method.
        # The Category.objects.all().delete() is fine.
```
