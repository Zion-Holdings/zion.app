import json
import hashlib
import secrets
from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
from rest_framework import exceptions as drf_exceptions # Renamed to avoid conflict
from django.urls import reverse
# Assuming tests.py is in public_api folder, adjust if different
from .models import ApiKey
from .authentication import ApiKeyAuthentication


class ApiKeyAuthenticationTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.authenticator = ApiKeyAuthentication()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.prefix, self.secret_key = ApiKey.generate_key()
        self.hashed_key = ApiKey.hash_secret(self.secret_key)
        self.api_key_instance = ApiKey.objects.create(
            user=self.user,
            name='Test Key',
            prefix=self.prefix,
            hashed_key=self.hashed_key
        )
        self.full_key = f"{self.prefix}.{self.secret_key}"

        self.revoked_prefix, self.revoked_secret_key = ApiKey.generate_key()
        self.revoked_hashed_key = ApiKey.hash_secret(self.revoked_secret_key)
        self.revoked_api_key_instance = ApiKey.objects.create(
            user=self.user,
            name='Revoked Test Key',
            prefix=self.revoked_prefix,
            hashed_key=self.revoked_hashed_key,
            revoked=True
        )
        self.revoked_full_key = f"{self.revoked_prefix}.{self.revoked_secret_key}"


    # Mock request object for direct authenticator testing
    class MockRequest:
        def __init__(self, headers=None):
            self.headers = headers or {}
            self.META = {f'HTTP_{k.upper().replace("-", "_")}': v for k, v in headers.items()} if headers else {}


    def test_authenticate_valid_key_x_api_key_header(self):
        # Test Case for ApiKeyAuthentication
        request = self.MockRequest(headers={'X-API-KEY': self.full_key})
        user, auth = self.authenticator.authenticate(request)
        self.assertEqual(user, self.user)
        self.assertIsNone(auth) # ApiKeyAuthentication returns (user, None)

    def test_authenticate_valid_key_authorization_header(self):
        # Test Case for ApiKeyAuthentication
        request = self.MockRequest(headers={'Authorization': f'Api-Key {self.full_key}'})
        user, auth = self.authenticator.authenticate(request)
        self.assertEqual(user, self.user)
        self.assertIsNone(auth)

    def test_authenticate_invalid_key_bad_hash(self):
        # Test Case for ApiKeyAuthentication
        bad_secret_key = secrets.token_urlsafe(32)
        bad_full_key = f"{self.prefix}.{bad_secret_key}" # Correct prefix, wrong secret
        request = self.MockRequest(headers={'X-API-KEY': bad_full_key})
        with self.assertRaises(drf_exceptions.AuthenticationFailed) as context:
            self.authenticator.authenticate(request)
        self.assertIn('Invalid API key.', str(context.exception)) # Adjust message

    def test_authenticate_invalid_key_unknown_prefix(self):
        # Test Case for ApiKeyAuthentication
        unknown_prefix = "unknownprefix"
        bad_full_key = f"{unknown_prefix}.{self.secret_key}"
        request = self.MockRequest(headers={'X-API-KEY': bad_full_key})
        with self.assertRaises(drf_exceptions.AuthenticationFailed) as context:
            self.authenticator.authenticate(request)
        self.assertIn('Invalid API key.', str(context.exception)) # Adjust message

    def test_authenticate_revoked_key(self):
        # Test Case for ApiKeyAuthentication
        request = self.MockRequest(headers={'X-API-KEY': self.revoked_full_key})
        with self.assertRaises(drf_exceptions.AuthenticationFailed) as context:
            self.authenticator.authenticate(request)
        self.assertIn('API key revoked.', str(context.exception)) # Adjust message

    def test_authenticate_missing_api_key_header(self):
        # Test Case for ApiKeyAuthentication
        request = self.MockRequest(headers={})
        auth_result = self.authenticator.authenticate(request)
        self.assertIsNone(auth_result) # Should return None if no key provided

    def test_authenticate_malformed_authorization_header(self):
        # Test Case for ApiKeyAuthentication
        request = self.MockRequest(headers={'Authorization': f'Bearer {self.full_key}'}) # Wrong scheme
        auth_result = self.authenticator.authenticate(request)
        self.assertIsNone(auth_result) # Should return None if scheme is not 'Api-Key'

        request_no_key = self.MockRequest(headers={'Authorization': 'Api-Key '}) # No key after scheme
        with self.assertRaises(drf_exceptions.AuthenticationFailed) as context:
            self.authenticator.authenticate(request_no_key)
        self.assertIn('Invalid API key format.', str(context.exception)) # Adjust message


class GenerateKeyViewTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.generate_key_url = reverse('api_generate_key') # Assuming URL name

    def test_generate_key_valid_post(self):
        # Test Case for generate_key view
        self.client.force_authenticate(user=self.user)
        initial_key_count = ApiKey.objects.filter(user=self.user).count()
        payload = {'name': 'My New Test Key'}
        response = self.client.post(self.generate_key_url, data=json.dumps(payload), content_type='application/json')

        self.assertEqual(response.status_code, 201) # Created
        response_data = json.loads(response.content)
        self.assertIn('key', response_data)
        self.assertIn('prefix', response_data)
        self.assertIn(payload['name'], response_data.get('name', ''))

        self.assertEqual(ApiKey.objects.filter(user=self.user).count(), initial_key_count + 1)
        created_key_instance = ApiKey.objects.get(user=self.user, prefix=response_data['prefix'])
        self.assertEqual(created_key_instance.name, payload['name'])
        # Verify the key hash if possible (requires knowing the secret from response_data['key'])
        prefix, secret = response_data['key'].split('.')
        self.assertEqual(prefix, response_data['prefix'])
        self.assertEqual(created_key_instance.hashed_key, ApiKey.hash_secret(secret))


    def test_generate_key_unauthenticated_post(self):
        # Test Case for generate_key view
        payload = {'name': 'My New Test Key'}
        response = self.client.post(self.generate_key_url, data=json.dumps(payload), content_type='application/json')
        self.assertEqual(response.status_code, 401) # Unauthorized (or 403 Forbidden)

    def test_generate_key_get_request(self):
        # Test Case for generate_key view
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.generate_key_url)
        self.assertEqual(response.status_code, 405) # Method Not Allowed


class RevokeKeyViewTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_a = User.objects.create_user(username='usera', password='passworda')
        self.user_b = User.objects.create_user(username='userb', password='passwordb')

        # Key for User A
        prefix_a, secret_a = ApiKey.generate_key()
        self.key_a_instance = ApiKey.objects.create(
            user=self.user_a, name='User A Key', prefix=prefix_a, hashed_key=ApiKey.hash_secret(secret_a)
        )
        self.prefix_a = prefix_a

        # Key for User B
        prefix_b, secret_b = ApiKey.generate_key()
        self.key_b_instance = ApiKey.objects.create(
            user=self.user_b, name='User B Key', prefix=prefix_b, hashed_key=ApiKey.hash_secret(secret_b)
        )
        self.prefix_b = prefix_b

        self.revoke_key_url = reverse('api_revoke_key') # Assuming URL name

    def test_revoke_key_valid_post_own_key(self):
        # Test Case for revoke_key view
        self.client.force_authenticate(user=self.user_a)
        payload = {'prefix': self.prefix_a}
        response = self.client.post(self.revoke_key_url, data=json.dumps(payload), content_type='application/json')

        self.assertEqual(response.status_code, 200)
        self.key_a_instance.refresh_from_db()
        self.assertTrue(self.key_a_instance.revoked)
        response_data = json.loads(response.content)
        self.assertEqual(response_data.get('message'), 'API key revoked successfully.')


    def test_revoke_key_attempt_revoke_another_users_key(self):
        # Test Case for revoke_key view
        self.client.force_authenticate(user=self.user_a) # User A tries to revoke User B's key
        payload = {'prefix': self.prefix_b}
        response = self.client.post(self.revoke_key_url, data=json.dumps(payload), content_type='application/json')

        # Should not find the key for this user, so it might return a "not found" or "success" (idempotent)
        # Assuming it returns success but doesn't actually revoke if not owned
        self.assertEqual(response.status_code, 200) # Or 404/403 depending on implementation
        self.key_b_instance.refresh_from_db()
        self.assertFalse(self.key_b_instance.revoked) # Key B should NOT be revoked
        # If the message changes for "not found for this user", adjust assertion
        response_data = json.loads(response.content)
        self.assertEqual(response_data.get('message'), 'API key not found or not owned by user.')


    def test_revoke_key_non_existent_prefix(self):
        # Test Case for revoke_key view
        self.client.force_authenticate(user=self.user_a)
        payload = {'prefix': 'nonexistentprefix'}
        response = self.client.post(self.revoke_key_url, data=json.dumps(payload), content_type='application/json')
        self.assertEqual(response.status_code, 200) # Or 404. Assuming idempotent success.
        response_data = json.loads(response.content)
        self.assertEqual(response_data.get('message'), 'API key not found or not owned by user.') # Adjust

    def test_revoke_key_missing_prefix(self):
        # Test Case for revoke_key view
        self.client.force_authenticate(user=self.user_a)
        payload = {} # Missing prefix
        response = self.client.post(self.revoke_key_url, data=json.dumps(payload), content_type='application/json')
        self.assertEqual(response.status_code, 400) # Bad Request
        response_data = json.loads(response.content)
        self.assertIn('error', response_data) # Or specific field error 'prefix'
        self.assertEqual(response_data.get('error'), 'Prefix is required.')


    def test_revoke_key_unauthenticated_post(self):
        # Test Case for revoke_key view
        payload = {'prefix': self.prefix_a}
        response = self.client.post(self.revoke_key_url, data=json.dumps(payload), content_type='application/json')
        self.assertEqual(response.status_code, 401) # Unauthorized (or 403)


class ProtectedEndpointViewTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')

        # Valid Key
        self.valid_prefix, self.valid_secret = ApiKey.generate_key()
        self.valid_hashed_key = ApiKey.hash_secret(self.valid_secret)
        ApiKey.objects.create(
            user=self.user, name='Valid Key', prefix=self.valid_prefix, hashed_key=self.valid_hashed_key
        )
        self.valid_full_key = f"{self.valid_prefix}.{self.valid_secret}"

        # Revoked Key
        self.revoked_prefix, self.revoked_secret = ApiKey.generate_key()
        self.revoked_hashed_key = ApiKey.hash_secret(self.revoked_secret)
        ApiKey.objects.create(
            user=self.user, name='Revoked Key', prefix=self.revoked_prefix,
            hashed_key=self.revoked_hashed_key, revoked=True
        )
        self.revoked_full_key = f"{self.revoked_prefix}.{self.revoked_secret}"

        self.protected_url = reverse('api_protected_endpoint') # Assuming URL name

    def test_protected_endpoint_valid_key_x_api_key(self):
        # Test Case for protected_endpoint
        self.client.credentials(HTTP_X_API_KEY=self.valid_full_key)
        response = self.client.get(self.protected_url)
        self.assertEqual(response.status_code, 200)
        response_data = json.loads(response.content)
        self.assertEqual(response_data, {'detail': 'success'}) # Adjust as per actual response

    def test_protected_endpoint_invalid_key_bad_hash(self):
        # Test Case for protected_endpoint
        bad_full_key = f"{self.valid_prefix}.wrongsecret"
        self.client.credentials(HTTP_X_API_KEY=bad_full_key)
        response = self.client.get(self.protected_url)
        self.assertEqual(response.status_code, 401) # Or 403
        # Expected error from ApiKeyAuthentication
        response_data = json.loads(response.content)
        self.assertIn('Invalid API key.', response_data.get('detail'))


    def test_protected_endpoint_revoked_key(self):
        # Test Case for protected_endpoint
        self.client.credentials(HTTP_X_API_KEY=self.revoked_full_key)
        response = self.client.get(self.protected_url)
        self.assertEqual(response.status_code, 401) # Or 403
        response_data = json.loads(response.content)
        self.assertIn('API key revoked.', response_data.get('detail'))


    def test_protected_endpoint_missing_key(self):
        # Test Case for protected_endpoint
        self.client.credentials() # Clear any existing credentials
        response = self.client.get(self.protected_url)
        self.assertEqual(response.status_code, 401) # Or 403
        response_data = json.loads(response.content)
        self.assertIn('Authentication credentials were not provided.', response_data.get('detail'))

    # Throttling: Actual timing tests are complex and out of scope for this subtask.
    # The presence of throttle classes on the view means that if these tests pass
    # (especially if run multiple times quickly, though that's not explicitly done here),
    # the basic integration of throttling is implicitly being used.
    # A dedicated test would mock `SimpleRateThrottle.get_cache_key` and `allow_request`.
    # For now, a comment suffices.
    # test_throttling_applied(self):
    #   ... (would require multiple rapid requests and checking for 429)
