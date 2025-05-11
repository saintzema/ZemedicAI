
import requests
import sys
import logging
from datetime import datetime
import os

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ZemedicAPITester:
    def __init__(self, base_url="https://719aa599-875d-4e6d-bb88-7a222149f050.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if not headers:
            headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        logger.info(f"Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                logger.info(f"✅ Passed - Status: {response.status_code}")
                return True, response.json() if response.content else {}
            else:
                logger.error(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                return False, {}

        except Exception as e:
            logger.error(f"❌ Failed - Error: {str(e)}")
            return False, {}
    
    def test_image_availability(self, image_paths):
        """Test if images are available at the specified paths"""
        for image_path in image_paths:
            self.tests_run += 1
            url = f"{self.base_url}{image_path}"
            logger.info(f"Testing image availability: {image_path}")
            
            try:
                response = requests.head(url)
                if response.status_code == 200:
                    self.tests_passed += 1
                    logger.info(f"✅ Image found: {image_path}")
                else:
                    logger.error(f"❌ Image not found: {image_path} (Status: {response.status_code})")
            except Exception as e:
                logger.error(f"❌ Error checking image: {image_path} - {str(e)}")

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
    
    # Test image availability
    logger.info("Testing image availability...")
    image_paths = [
        "/images/cxr-before.jpg",
        "/images/cxr-after.jpg",
        "/images/cth-before.jpg",
        "/images/cth-after.jpg"
    ]
    tester.test_image_availability(image_paths)
    
    # Print results
    logger.info(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
