import json
from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
from django.core import mail
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator

class ForgotPasswordTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.user_email = 'testuser@example.com'
        self.user_password = 'strongpassword123'
        self.user = User.objects.create_user(username='testuser', email=self.user_email, password=self.user_password)
        self.forgot_password_url = reverse('forgot_password') # Assuming 'forgot_password' is the name in urls.py

    def test_forgot_password_valid_email_existing_user(self):
        # Test Case 1.1
        response = self.client.post(
            self.forgot_password_url,
            json.dumps({'email': self.user_email}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        response_data = json.loads(response.content)
        self.assertEqual(response_data.get('message'), 'Password reset email sent if user exists.') # Adjust expected message as per actual view

        self.assertEqual(len(mail.outbox), 1)
        email_message = mail.outbox[0]
        self.assertEqual(email_message.to, [self.user_email])
        self.assertIn('Reset your password', email_message.subject) # Adjust subject as per actual email

        uid = urlsafe_base64_encode(force_bytes(self.user.pk))
        token = default_token_generator.make_token(self.user)
        self.assertIn(uid, email_message.body)
        self.assertIn(token, email_message.body)

    def test_forgot_password_valid_email_non_existing_user(self):
        # Test Case 1.2
        non_existent_email = 'nouser@example.com'
        response = self.client.post(
            self.forgot_password_url,
            json.dumps({'email': non_existent_email}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200) # Should still be 200 not to reveal user existence
        response_data = json.loads(response.content)
        self.assertEqual(response_data.get('message'), 'Password reset email sent if user exists.') # Same message

        self.assertEqual(len(mail.outbox), 0) # No email should be sent

    def test_forgot_password_invalid_email_format(self):
        # Test Case 1.3
        invalid_email = 'notanemail'
        response = self.client.post(
            self.forgot_password_url,
            json.dumps({'email': invalid_email}),
            content_type='application/json'
        )
        # Assuming the view validates the email format and returns 400
        # If it doesn't, this test will fail and reveal different behavior (e.g., treating as non-existent)
        self.assertEqual(response.status_code, 400)
        response_data = json.loads(response.content)
        self.assertIn('error', response_data) # Or specific error key like 'email'
        self.assertEqual(response_data.get('error'), 'Enter a valid email address.') # Adjust expected message
        self.assertEqual(len(mail.outbox), 0)

    def test_forgot_password_empty_or_missing_email(self):
        # Test Case 1.4
        # Test with empty email string
        response_empty = self.client.post(
            self.forgot_password_url,
            json.dumps({'email': ''}),
            content_type='application/json'
        )
        self.assertEqual(response_empty.status_code, 400)
        response_data_empty = json.loads(response_empty.content)
        self.assertIn('error', response_data_empty) # Or specific error key like 'email'
        self.assertEqual(response_data_empty.get('error'), 'This field may not be blank.') # Adjust expected message

        # Test with missing email field (empty JSON object)
        response_missing = self.client.post(
            self.forgot_password_url,
            json.dumps({}),
            content_type='application/json'
        )
        self.assertEqual(response_missing.status_code, 400)
        response_data_missing = json.loads(response_missing.content)
        self.assertIn('error', response_data_missing) # Or specific error key like 'email'
        self.assertEqual(response_data_missing.get('error'), 'This field is required.') # Adjust expected message

        self.assertEqual(len(mail.outbox), 0)

    def test_forgot_password_non_post_request(self):
        # Test Case 1.5
        response = self.client.get(self.forgot_password_url)
        self.assertEqual(response.status_code, 405) # Method Not Allowed
        response_data = json.loads(response.content)
        self.assertIn('error', response_data)
        self.assertEqual(response_data.get('error'), 'Method not allowed.') # Adjust expected message

class ResetPasswordTests(TestCase):
    def setUp(self):
        self.client = Client()
        # Assuming 'reset_password' is the name in urls.py for the reset view.
        # This might need adjustment if the URL pattern includes uid and token directly.
        # For now, we'll assume a base name and construct the full URL in tests.
        self.reset_password_base_url_name = 'reset_password'

        self.user = User.objects.create_user(username='testuser', email='test@example.com', password='oldpassword123')
        self.uid = urlsafe_base64_encode(force_bytes(self.user.pk))
        self.token = default_token_generator.make_token(self.user)

    def _get_reset_url(self, uid, token):
        # Helper to construct the full reset URL.
        # This assumes a URL pattern like /reset-password/<uidb64>/<token>/
        return reverse(self.reset_password_base_url_name, kwargs={'uidb64': uid, 'token': token})

    def test_reset_password_valid_uid_token_password(self):
        # Test Case 2.1
        reset_url = self._get_reset_url(self.uid, self.token)
        new_password = 'newStrongPassword123'
        response = self.client.post(
            reset_url,
            json.dumps({'password': new_password, 'confirm_password': new_password}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)
        response_data = json.loads(response.content)
        self.assertEqual(response_data.get('message'), 'Password has been reset successfully.') # Adjust as per actual message

        self.user.refresh_from_db()
        self.assertTrue(self.user.check_password(new_password))
        # Also check that an email is NOT sent for this action
        self.assertEqual(len(mail.outbox), 0)


    def test_reset_password_invalid_uid(self):
        # Test Case 2.2
        invalid_uid = 'invaliduid'
        reset_url = self._get_reset_url(invalid_uid, self.token)
        new_password = 'newStrongPassword123'
        response = self.client.post(
            reset_url,
            json.dumps({'password': new_password, 'confirm_password': new_password}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400) # Or 404 if UID malformed leads to URL not found
        response_data = json.loads(response.content)
        self.assertIn('error', response_data)
        # Exact error message might depend on how Django handles malformed uids in URL converters
        # or how the view validates the user from uid.
        self.assertEqual(response_data.get('error'), 'Invalid UID or token.') # Adjust as per actual message
        self.assertEqual(len(mail.outbox), 0)


    def test_reset_password_valid_uid_invalid_token(self):
        # Test Case 2.3
        invalid_token = 'invalidtoken'
        reset_url = self._get_reset_url(self.uid, invalid_token)
        new_password = 'newStrongPassword123'
        response = self.client.post(
            reset_url,
            json.dumps({'password': new_password, 'confirm_password': new_password}),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400)
        response_data = json.loads(response.content)
        self.assertIn('error', response_data)
        self.assertEqual(response_data.get('error'), 'Invalid UID or token.') # Adjust as per actual message
        self.assertEqual(len(mail.outbox), 0)


    def test_reset_password_token_expired(self):
        # Test Case 2.4
        # This test is complex to implement without mocking `check_token` or Django's time functions,
        # or adjusting token timeout settings for the test environment.
        # For now, we will note this limitation and skip active test implementation.
        self.skipTest("Token expiry test requires mocking or specific settings.")

    def test_reset_password_missing_password(self):
        # Test Case 2.5
        reset_url = self._get_reset_url(self.uid, self.token)
        response = self.client.post(
            reset_url,
            json.dumps({}), # Empty data, missing 'password' and 'confirm_password'
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400)
        response_data = json.loads(response.content)
        self.assertIn('error', response_data) # Or specific field errors
        # Example: assuming separate errors for password and confirm_password
        self.assertIn('password', response_data.get('error', {}))
        self.assertEqual(response_data.get('error', {}).get('password'), 'This field is required.') # Adjust
        self.assertEqual(len(mail.outbox), 0)

    def test_reset_password_non_post_request(self):
        # Test Case 2.6
        reset_url = self._get_reset_url(self.uid, self.token)
        response = self.client.get(reset_url) # Using GET
        self.assertEqual(response.status_code, 405) # Method Not Allowed
        response_data = json.loads(response.content)
        self.assertIn('error', response_data)
        self.assertEqual(response_data.get('error'), 'Method not allowed.') # Adjust expected message
        self.assertEqual(len(mail.outbox), 0)
