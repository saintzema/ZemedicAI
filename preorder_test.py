import unittest
import requests
from datetime import datetime

class PreorderFunctionalityTest(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(PreorderFunctionalityTest, self).__init__(*args, **kwargs)
        self.base_url = "https://d88c44bf-7ab5-498a-a550-70bea3468f85.preview.emergentagent.com"
        self.tests_run = 0
        self.tests_passed = 0

    def setUp(self):
        self.tests_run += 1
        print(f"\n🔍 Running test: {self._testMethodName}")

    def tearDown(self):
        if hasattr(self, '_outcome'):
            result = self.defaultTestResult()
            self._feedErrorsToResult(result, self._outcome.errors)
            if result.wasSuccessful():
                self.tests_passed += 1
                print(f"✅ Test passed: {self._testMethodName}")
            else:
                print(f"❌ Test failed: {self._testMethodName}")

    def test_preorder_page_availability(self):
        """Test that the preorder page is available"""
        response = requests.get(f"{self.base_url}/preorder")
        self.assertEqual(response.status_code, 200)
        self.assertIn("text/html", response.headers.get("Content-Type", ""))

    def test_contact_page_with_booth_param(self):
        """Test that the contact page with booth parameter is available"""
        response = requests.get(f"{self.base_url}/contact?type=booth")
        self.assertEqual(response.status_code, 200)
        self.assertIn("text/html", response.headers.get("Content-Type", ""))

    def test_contact_page_with_sdk_param(self):
        """Test that the contact page with sdk parameter is available"""
        response = requests.get(f"{self.base_url}/contact?type=sdk")
        self.assertEqual(response.status_code, 200)
        self.assertIn("text/html", response.headers.get("Content-Type", ""))

def run_tests():
    # Create a test suite
    suite = unittest.TestSuite()
    
    # Add tests to the suite
    suite.addTest(PreorderFunctionalityTest('test_preorder_page_availability'))
    suite.addTest(PreorderFunctionalityTest('test_contact_page_with_booth_param'))
    suite.addTest(PreorderFunctionalityTest('test_contact_page_with_sdk_param'))
    
    # Run the tests
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Print summary
    tester = PreorderFunctionalityTest()
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    # Return appropriate exit code
    return 0 if result.wasSuccessful() else 1

if __name__ == "__main__":
    run_tests()