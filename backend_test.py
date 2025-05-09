import requests
import unittest
import os
import sys
from datetime import datetime
import random
import string
import time

class ZemedicAIAPITester(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(ZemedicAIAPITester, self).__init__(*args, **kwargs)
        # Get the backend URL from the frontend .env file
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    self.base_url = line.strip().split('=')[1]
                    break
        
        print(f"Using backend URL: {self.base_url}")
        self.token = None
        self.user_id = None
        self.email = f"test_{self._random_string(8)}@example.com"
        self.password = "Test123!"
        self.name = "Test User"
    
    def _random_string(self, length=8):
        """Generate a random string for unique test data"""
        return ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))
    
    def setUp(self):
        """Set up for each test"""
        pass
    
    def test_01_health_check(self):
        """Test the health check endpoint"""
        print("\n🔍 Testing health check endpoint...")
        response = requests.get(f"{self.base_url}/api/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "ok")
        print("✅ Health check passed")
    
    def test_02_register(self):
        """Test user registration"""
        print(f"\n🔍 Testing user registration with email: {self.email}...")
        response = requests.post(
            f"{self.base_url}/api/auth/register",
            json={
                "name": self.name,
                "email": self.email,
                "password": self.password
            }
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("access_token", data)
        self.assertIn("user_id", data)
        self.token = data["access_token"]
        self.user_id = data["user_id"]
        print(f"✅ Registration successful. User ID: {self.user_id}")
    
    def test_03_login(self):
        """Test user login"""
        print(f"\n🔍 Testing user login with email: {self.email}...")
        response = requests.post(
            f"{self.base_url}/api/auth/login",
            json={
                "email": self.email,
                "password": self.password
            }
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("access_token", data)
        self.token = data["access_token"]
        print("✅ Login successful")
    
    def test_04_get_profile(self):
        """Test getting user profile"""
        print("\n🔍 Testing get user profile...")
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(
            f"{self.base_url}/api/user/profile",
            headers=headers
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["email"], self.email)
        self.assertEqual(data["name"], self.name)
        print("✅ Get profile successful")
    
    def test_05_analyze_xray(self):
        """Test X-ray analysis"""
        print("\n🔍 Testing X-ray analysis...")
        # Use a sample image for testing
        image_path = "/app/frontend/src/assets/sample-xray.jpg"
        
        # If the sample image doesn't exist, create a simple test image
        if not os.path.exists(image_path):
            print("Sample X-ray image not found, using a placeholder image...")
            from PIL import Image
            img = Image.new('RGB', (224, 224), color = 'white')
            img.save('/tmp/test-xray.jpg')
            image_path = '/tmp/test-xray.jpg'
        
        headers = {"Authorization": f"Bearer {self.token}"}
        with open(image_path, 'rb') as img:
            files = {'file': ('test-xray.jpg', img, 'image/jpeg')}
            response = requests.post(
                f"{self.base_url}/api/analyze/xray",
                headers=headers,
                files=files
            )
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("id", data)
        self.assertIn("predictions", data)
        self.assertIn("recommendations", data)
        print("✅ X-ray analysis successful")
    
    def test_06_analyze_skin(self):
        """Test skin analysis"""
        print("\n🔍 Testing skin analysis...")
        # Use a sample image for testing
        image_path = "/app/frontend/src/assets/sample-skin.jpg"
        
        # If the sample image doesn't exist, create a simple test image
        if not os.path.exists(image_path):
            print("Sample skin image not found, using a placeholder image...")
            from PIL import Image
            img = Image.new('RGB', (224, 224), color = 'tan')
            img.save('/tmp/test-skin.jpg')
            image_path = '/tmp/test-skin.jpg'
        
        headers = {"Authorization": f"Bearer {self.token}"}
        with open(image_path, 'rb') as img:
            files = {'file': ('test-skin.jpg', img, 'image/jpeg')}
            response = requests.post(
                f"{self.base_url}/api/analyze/skin",
                headers=headers,
                files=files
            )
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("id", data)
        self.assertIn("predictions", data)
        self.assertIn("recommendations", data)
        print("✅ Skin analysis successful")
    
    def test_07_analyze_ct_scan(self):
        """Test CT scan analysis"""
        print("\n🔍 Testing CT scan analysis...")
        # Use a sample image for testing
        image_path = "/app/frontend/src/assets/sample-ct.jpg"
        
        # If the sample image doesn't exist, create a simple test image
        if not os.path.exists(image_path):
            print("Sample CT scan image not found, using a placeholder image...")
            from PIL import Image
            img = Image.new('RGB', (224, 224), color = 'gray')
            img.save('/tmp/test-ct.jpg')
            image_path = '/tmp/test-ct.jpg'
        
        headers = {"Authorization": f"Bearer {self.token}"}
        with open(image_path, 'rb') as img:
            files = {'file': ('test-ct.jpg', img, 'image/jpeg')}
            response = requests.post(
                f"{self.base_url}/api/analyze/ct-scan",
                headers=headers,
                files=files
            )
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("id", data)
        self.assertIn("predictions", data)
        self.assertIn("recommendations", data)
        print("✅ CT scan analysis successful")
    
    def test_08_get_history(self):
        """Test getting user history"""
        print("\n🔍 Testing get user history...")
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(
            f"{self.base_url}/api/user/history",
            headers=headers
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        print("✅ Get history successful")

if __name__ == "__main__":
    # Run the tests in order
    test_suite = unittest.TestSuite()
    test_suite.addTest(ZemedicAIAPITester('test_01_health_check'))
    test_suite.addTest(ZemedicAIAPITester('test_02_register'))
    test_suite.addTest(ZemedicAIAPITester('test_03_login'))
    test_suite.addTest(ZemedicAIAPITester('test_04_get_profile'))
    test_suite.addTest(ZemedicAIAPITester('test_05_analyze_xray'))
    test_suite.addTest(ZemedicAIAPITester('test_06_analyze_skin'))
    test_suite.addTest(ZemedicAIAPITester('test_07_analyze_ct_scan'))
    test_suite.addTest(ZemedicAIAPITester('test_08_get_history'))
    
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(test_suite)