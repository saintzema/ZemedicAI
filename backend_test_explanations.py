import requests
import sys
import logging
import json
import os
from datetime import datetime

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ZemedicAPITester:
    def __init__(self, base_url="https://d88c44bf-7ab5-498a-a550-70bea3468f85.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.token = None
        self.test_user = f"test_user_{datetime.now().strftime('%H%M%S')}"
        self.test_password = "TestPass123!"
        self.test_email = f"{self.test_user}@example.com"
        self.analysis_id = None
        self.ct_analysis_id = None
        self.skin_analysis_id = None

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
     
    def login_user(self):
        """Login and get authentication token"""
        logger.info(f"Logging in as: {self.test_email}")
        data = {
            "email": self.test_email,
            "password": self.test_password
        }
         
        success, response = self.run_test(
            "User Login",
            "POST",
            "api/auth/login",
            200,
            data=data
        )
         
        if success and 'access_token' in response:
            self.token = response['access_token']
            logger.info("✅ Login successful, token obtained")
            return True
        else:
            logger.error("❌ Login failed, no token obtained")
            return False
    
    def test_xray_analysis(self):
        """Test the X-ray analysis endpoint with patient-friendly explanations"""
        if not self.token:
            logger.error("❌ Cannot test X-ray analysis: No authentication token")
            return False
         
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-xray.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
         
        logger.info("Testing X-ray analysis with patient-friendly explanations")
         
        with open(test_image_path, 'rb') as f:
            files = {'file': ('sample-xray.jpg', f, 'image/jpeg')}
            success, response = self.run_test(
                "X-ray Analysis",
                "POST",
                "api/analyze/xray",
                200,
                files=files
            )
         
        if success:
            # Log the full response to understand its structure
            logger.info(f"X-ray analysis response: {json.dumps(response, indent=2)}")
             
            # Check for expected fields based on the actual response
            if 'predictions' in response:
                logger.info("✅ Response contains predictions field")
                
                # Check if predictions have descriptions for patient-friendly explanations
                has_description = False
                for prediction in response.get('predictions', []):
                    if 'description' in prediction:
                        has_description = True
                        logger.info(f"✅ Prediction '{prediction.get('label', 'unknown')}' has description: {prediction.get('description', '')}")
                
                if not has_description:
                    logger.warning("⚠️ No predictions with descriptions found for patient-friendly explanations")
            else:
                logger.error("❌ Response missing 'predictions' field needed for patient-friendly explanations")
                success = False
             
            # Store the analysis ID for later use
            if 'id' in response:
                self.analysis_id = response['id']
                logger.info(f"✅ Analysis ID stored: {self.analysis_id}")
            else:
                logger.error("❌ Response missing 'id' field")
                success = False
         
        return success
    
    def test_skin_analysis(self):
        """Test the skin lesion analysis endpoint with patient-friendly explanations"""
        if not self.token:
            logger.error("❌ Cannot test skin analysis: No authentication token")
            return False
         
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-skin.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
         
        logger.info("Testing skin analysis with patient-friendly explanations")
         
        with open(test_image_path, 'rb') as f:
            files = {'file': ('sample-skin.jpg', f, 'image/jpeg')}
            success, response = self.run_test(
                "Skin Analysis",
                "POST",
                "api/analyze/skin",
                200,
                files=files
            )
         
        if success:
            # Log the full response to understand its structure
            logger.info(f"Skin analysis response: {json.dumps(response, indent=2)}")
             
            # Check for expected fields based on the actual response
            if 'predictions' in response:
                logger.info("✅ Response contains predictions field")
                
                # Check if predictions have descriptions for patient-friendly explanations
                has_description = False
                for prediction in response.get('predictions', []):
                    if 'description' in prediction:
                        has_description = True
                        logger.info(f"✅ Prediction '{prediction.get('label', 'unknown')}' has description: {prediction.get('description', '')}")
                
                if not has_description:
                    logger.warning("⚠️ No predictions with descriptions found for patient-friendly explanations")
            else:
                logger.error("❌ Response missing 'predictions' field needed for patient-friendly explanations")
                success = False
             
            # Store the analysis ID for later use
            if 'id' in response:
                self.skin_analysis_id = response['id']
                logger.info(f"✅ Skin Analysis ID stored: {self.skin_analysis_id}")
            else:
                logger.error("❌ Response missing 'id' field")
                success = False
         
        return success
    
    def test_ct_scan_analysis(self):
        """Test the CT scan analysis endpoint with patient-friendly explanations"""
        if not self.token:
            logger.error("❌ Cannot test CT scan analysis: No authentication token")
            return False
         
        # Create a test image file if it doesn't exist
        test_image_path = '/app/frontend/public/sample-ct.jpg'
        if not os.path.exists(test_image_path):
            os.makedirs(os.path.dirname(test_image_path), exist_ok=True)
            with open(test_image_path, 'wb') as f:
                f.write(b'test image content')
         
        logger.info("Testing CT scan analysis with patient-friendly explanations")
         
        with open(test_image_path, 'rb') as f:
            files = {'file': ('sample-ct.jpg', f, 'image/jpeg')}
            success, response = self.run_test(
                "CT Scan Analysis",
                "POST",
                "api/analyze/ct-scan",
                200,
                files=files
            )
         
        if success:
            # Log the full response to understand its structure
            logger.info(f"CT scan analysis response: {json.dumps(response, indent=2)}")
             
            # Check for expected fields based on the actual response
            if 'predictions' in response:
                logger.info("✅ Response contains predictions field")
                
                # Check if predictions have descriptions for patient-friendly explanations
                has_description = False
                for prediction in response.get('predictions', []):
                    if 'description' in prediction:
                        has_description = True
                        logger.info(f"✅ Prediction '{prediction.get('label', 'unknown')}' has description: {prediction.get('description', '')}")
                
                if not has_description:
                    logger.warning("⚠️ No predictions with descriptions found for patient-friendly explanations")
            else:
                logger.error("❌ Response missing 'predictions' field needed for patient-friendly explanations")
                success = False
             
            # Store the analysis ID for later use
            if 'id' in response:
                self.ct_analysis_id = response['id']
                logger.info(f"✅ CT Analysis ID stored: {self.ct_analysis_id}")
            else:
                logger.error("❌ Response missing 'id' field")
                success = False
         
        return success

def main():
    # Setup
    tester = ZemedicAPITester()
    
    # Test health endpoint
    logger.info("Testing backend health endpoint...")
    success, response = tester.run_test(
        "Health Check",
        "GET",
        "api/health",
        200
    )
    
    if not success:
        logger.error("❌ Health check failed, stopping tests")
        return 1
    
    logger.info(f"Health check response: {response}")
    
    # Test user registration and login
    if tester.register_user():
        # If registration didn't provide a token, try login
        if not tester.token and not tester.login_user():
            logger.error("❌ Login failed, skipping analysis tests")
            return 1
        
        # Test X-ray analysis with patient-friendly explanations
        tester.test_xray_analysis()
        
        # Test skin analysis with patient-friendly explanations
        tester.test_skin_analysis()
        
        # Test CT scan analysis with patient-friendly explanations
        tester.test_ct_scan_analysis()
        
    else:
        logger.error("❌ Registration failed, skipping login and analysis tests")
        return 1
    
    # Print results
    logger.info(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())