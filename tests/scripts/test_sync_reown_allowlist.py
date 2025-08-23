import unittest
from unittest.mock import patch, mock_open, MagicMock
import os
import json
import sys

# Add scripts to sys.path to allow direct import
# This makes sure that `from scripts import sync_reown_allowlist` works
# by adding the parent directory of 'scripts' to the Python path.
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from scripts import sync_reown_allowlist

class TestSyncReownAllowlist(unittest.TestCase):

    @patch.dict(os.environ, {'CLOUD_REOWN_TOKEN': 'test_token', 'CLOUD_REOWN_PROJECT_ID': 'test_project_id'})
    @patch('scripts.sync_reown_allowlist.requests.post')
    def test_sync_success(self, mock_post):
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.raise_for_status = MagicMock()
        mock_response.text = '{"status": "success"}'
        mock_post.return_value = mock_response

        mock_data = {"allowed_origins": ["https://example.com", "https://test.com"]}

        # Mock open for reading allowlist.json
        m_open = mock_open(read_data=json.dumps(mock_data))
        with patch('builtins.open', m_open):
            result = sync_reown_allowlist.sync_allowlist()

        self.assertTrue(result)
        m_open.assert_called_once_with('infra/allowlist.json', 'r')
        mock_post.assert_called_once_with(
            "https://api.cloudreown.com/projects/test_project_id/allowlist",
            headers={
                'Authorization': 'Bearer test_token',
                'Content-Type': 'application/json'
            },
            json=["https://example.com", "https://test.com"]
        )

    @patch.dict(os.environ, {'CLOUD_REOWN_TOKEN': 'test_token', 'CLOUD_REOWN_PROJECT_ID': 'test_project_id'})
    @patch('scripts.sync_reown_allowlist.requests.post')
    def test_sync_api_error(self, mock_post):
        mock_response = MagicMock()
        mock_response.status_code = 500
        mock_response.text = '{"error": "server error"}'
        mock_response.raise_for_status.side_effect = requests.exceptions.HTTPError("API Error")
        mock_post.return_value = mock_response

        mock_data = {"allowed_origins": ["https://example.com"]}
        m_open = mock_open(read_data=json.dumps(mock_data))

        with patch('builtins.open', m_open):
            with self.assertRaises(SystemExit) as cm:
                sync_reown_allowlist.sync_allowlist()
        self.assertEqual(cm.exception.code, 1)
        mock_post.assert_called_once()

    @patch.dict(os.environ, {}) # No env vars
    def test_missing_secrets(self):
        with self.assertRaises(SystemExit) as cm:
            sync_reown_allowlist.sync_allowlist()
        self.assertEqual(cm.exception.code, 1)
        # Check console output if possible, or assume print works

    @patch.dict(os.environ, {'CLOUD_REOWN_TOKEN': 'test_token', 'CLOUD_REOWN_PROJECT_ID': 'test_project_id'})
    def test_allowlist_file_not_found(self):
        m_open = mock_open()
        m_open.side_effect = FileNotFoundError
        with patch('builtins.open', m_open):
            with self.assertRaises(SystemExit) as cm:
                sync_reown_allowlist.sync_allowlist()
        self.assertEqual(cm.exception.code, 1)

    @patch.dict(os.environ, {'CLOUD_REOWN_TOKEN': 'test_token', 'CLOUD_REOWN_PROJECT_ID': 'test_project_id'})
    def test_allowlist_json_decode_error(self):
        m_open = mock_open(read_data="invalid json")
        with patch('builtins.open', m_open):
            with self.assertRaises(SystemExit) as cm:
                sync_reown_allowlist.sync_allowlist()
        self.assertEqual(cm.exception.code, 1)

    @patch.dict(os.environ, {'CLOUD_REOWN_TOKEN': 'test_token', 'CLOUD_REOWN_PROJECT_ID': 'test_project_id'})
    @patch('scripts.sync_reown_allowlist.requests.post') # Mock post so it doesn't make a real call
    def test_empty_allowlist(self, mock_post): # Added mock_post here
        mock_data = {"allowed_origins": []}
        m_open = mock_open(read_data=json.dumps(mock_data))
        with patch('builtins.open', m_open):
             with self.assertRaises(SystemExit) as cm:
                sync_reown_allowlist.sync_allowlist()
        self.assertEqual(cm.exception.code, 0) # Should exit cleanly
        mock_post.assert_not_called() # API should not be called if list is empty

if __name__ == '__main__':
    unittest.main()
