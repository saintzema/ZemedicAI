import requests
import sys
import logging
import json
import os
from datetime import datetime
import time

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ZemedicRandomnessAPITester:
    def __init__(self, base_url="https://d88c44bf-7ab5-498a-a550-70bea3468f85.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.token = None
        self.test_user = f"test_user_{datetime.now().strftime('%H%M%S')}"
        self.test_password = "TestPass123!"
        self.test_email = f"{self.test_user}@example.com"

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None, files=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if not headers:
            headers = {'Content-Type': 'application/json'}
        
        if self.token and 'Authorization' not in headers:
            headers['Authorization'] = f'Bearer {self.token}'
        
        self.tests_run += 1
        logger.info(f"Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                if files:
                    # Remove Content-Type for multipart/form-data
                    if 'Content-Type' in headers:
                        del headers['Content-Type']
                    response = requests.post(url, headers=headers, files=files)
                else:
                    response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                logger.info(f"✅ Passed - Status: {response.status_code}")
                try:
                    return True, response.json() if response.content else {}
                except:
                    return True, {}
            else:
                logger.error(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_content = response.json() if response.content else {}
                    logger.error(f"Response content: {error_content}")
                except:
                    logger.error(f"Response content: {response.text}")
                return False, {}

        except Exception as e:
            logger.error(f"❌ Failed - Error: {str(e)}")
            return False, {}
    
    def register_user(self):
        """Register a test user"""
        logger.info(f"Registering test user: {self.test_user}")
        data = {
            "email": self.test_email,
            "name": "Test User",
            "password": self.test_password
        }
        
        success, response = self.run_test(
            "User Registration",
            "POST",
            "api/auth/register",
            200,
            data=data
        )
        
        if success and 'access_token' in response:
            self.token = response['access_token']
            logger.info("✅ Registration successful, token obtained")
            return True
        
        return success
    
    def test_xray_analysis_randomness(self, num_tests=3):
        """Test if X-ray analysis results are different for each upload"""
        if not self.token:
            logger.error("❌ Cannot test X-ray analysis: No authentication token")
            return False
        
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-xray.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
        
        logger.info(f"Testing X-ray analysis randomness with {num_tests} uploads")
        
        results = []
        for i in range(num_tests):
            with open(test_image_path, 'rb') as f:
                files = {'file': ('sample-xray.jpg', f, 'image/jpeg')}
                success, response = self.run_test(
                    f"X-ray Analysis #{i+1}",
                    "POST",
                    "api/analyze/xray",
                    200,
                    files=files
                )
            
            if success and 'predictions' in response:
                results.append(response)
            else:
                logger.error(f"❌ X-ray analysis #{i+1} failed")
                return False
            
            # Wait a bit between requests to ensure different timestamps
            time.sleep(1)
        
        # Compare results to check for differences
        are_different = self.compare_results(results)
        if are_different:
            logger.info("✅ X-ray analysis results are different for each upload")
        else:
            logger.error("❌ X-ray analysis results are the same for each upload")
        
        return are_different
    
    def test_skin_analysis_randomness(self, num_tests=3):
        """Test if skin lesion analysis results are different for each upload"""
        if not self.token:
            logger.error("❌ Cannot test skin analysis: No authentication token")
            return False
        
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-skin.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
        
        logger.info(f"Testing skin analysis randomness with {num_tests} uploads")
        
        results = []
        for i in range(num_tests):
            with open(test_image_path, 'rb') as f:
                files = {'file': ('sample-skin.jpg', f, 'image/jpeg')}
                success, response = self.run_test(
                    f"Skin Analysis #{i+1}",
                    "POST",
                    "api/analyze/skin",
                    200,
                    files=files
                )
            
            if success and 'predictions' in response:
                results.append(response)
            else:
                logger.error(f"❌ Skin analysis #{i+1} failed")
                return False
            
            # Wait a bit between requests to ensure different timestamps
            time.sleep(1)
        
        # Compare results to check for differences
        are_different = self.compare_results(results)
        if are_different:
            logger.info("✅ Skin analysis results are different for each upload")
        else:
            logger.error("❌ Skin analysis results are the same for each upload")
        
        return are_different
    
    def test_ct_scan_analysis_randomness(self, num_tests=3):
        """Test if CT scan analysis results are different for each upload"""
        if not self.token:
            logger.error("❌ Cannot test CT scan analysis: No authentication token")
            return False
        
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-ct.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
        
        logger.info(f"Testing CT scan analysis randomness with {num_tests} uploads")
        
        results = []
        for i in range(num_tests):
            with open(test_image_path, 'rb') as f:
                files = {'file': ('sample-ct.jpg', f, 'image/jpeg')}
                success, response = self.run_test(
                    f"CT Scan Analysis #{i+1}",
                    "POST",
                    "api/analyze/ct-scan",
                    200,
                    files=files
                )
            
            if success and 'predictions' in response:
                results.append(response)
            else:
                logger.error(f"❌ CT scan analysis #{i+1} failed")
                return False
            
            # Wait a bit between requests to ensure different timestamps
            time.sleep(1)
        
        # Compare results to check for differences
        are_different = self.compare_results(results)
        if are_different:
            logger.info("✅ CT scan analysis results are different for each upload")
        else:
            logger.error("❌ CT scan analysis results are the same for each upload")
        
        return are_different
    
    def compare_results(self, results):
        """Compare multiple analysis results to check if they're different"""
        if not results or len(results) < 2:
            return False
        
        # Extract predictions from each result
        predictions_list = [json.dumps(sorted(r.get('predictions', []), key=lambda x: x.get('label'))) for r in results]
        
        # Check if all predictions are the same
        all_same = all(p == predictions_list[0] for p in predictions_list)
        
        # Log the predictions for debugging
        for i, preds in enumerate(predictions_list):
            logger.info(f"Predictions from test #{i+1}: {preds}")
        
        # If all predictions are the same, the results are not different
        return not all_same

def main():
    # Setup
    tester = ZemedicRandomnessAPITester()
    
    # Test user registration
    if tester.register_user():
        # Test X-ray analysis randomness
        xray_different = tester.test_xray_analysis_randomness()
        
        # Test skin analysis randomness
        skin_different = tester.test_skin_analysis_randomness()
        
        # Test CT scan analysis randomness
        ct_different = tester.test_ct_scan_analysis_randomness()
        
        # Print summary of randomness tests
        logger.info("\n--- Randomness Test Results ---")
        logger.info(f"X-ray analysis randomness: {'✅ PASS' if xray_different else '❌ FAIL'}")
        logger.info(f"Skin analysis randomness: {'✅ PASS' if skin_different else '❌ FAIL'}")
        logger.info(f"CT scan analysis randomness: {'✅ PASS' if ct_different else '❌ FAIL'}")
        
    else:
        logger.error("❌ Registration failed, skipping analysis tests")
        return 1
    
    # Print results
    logger.info(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())