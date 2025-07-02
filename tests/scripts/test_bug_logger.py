import os
import json
import tempfile
import importlib
import unittest

class TestBugLogger(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.log_file = os.path.join(self.tempdir.name, 'bug_log.json')
        os.environ['BUG_LOG_FILE'] = self.log_file
        # Reload module so it picks up new env variable
        if 'bug_logger' in globals():
            importlib.reload(globals()['bug_logger'])
        else:
            global bug_logger
            import bug_logger
            bug_logger = importlib.reload(bug_logger)

    def tearDown(self):
        self.tempdir.cleanup()
        os.environ.pop('BUG_LOG_FILE', None)

    def test_log_bug_writes_entries(self):
        bug_logger.log_bug(error_message='test error', severity='High')
        self.assertTrue(os.path.exists(self.log_file))
        with open(self.log_file) as f:
            data = json.load(f)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['error_message'], 'test error')

        # Log another error to ensure append works
        bug_logger.log_bug(error_message='another error', severity='Low')
        with open(self.log_file) as f:
            data = json.load(f)
        self.assertEqual(len(data), 2)
        self.assertEqual(data[1]['severity'], 'Low')

if __name__ == '__main__':
    unittest.main()
