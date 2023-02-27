import sys
sys.path.append("../") # https://stackoverflow.com/questions/4383571/importing-files-from-different-folder
import unittest # documentation here: https://docs.python.org/3/library/unittest.html
from src.request_handler.search.JsonTranslator import search_images

class TestSearchImages(unittest.TestCase):
    
    def test_emptyList(self):
        property_ids = []
        cursor = "some object"
        result = search_images(property_ids, cursor)
        self.assertEqual(len(result), 0)
    
    def test_wrongInputList(self):
        property_ids = "abc"
        cursor = "some object"
        self.assertRaises(ValueError, search_images, property_ids, cursor)
    
    def test_inputIsNone(self):
        property_ids = None
        cursor = "some object"
        self.assertRaises(ValueError, search_images, property_ids, cursor)
        
    def test_someElementInListIsDouble(self):
        property_ids = [1, 2, 3.0]
        cursor = "some object"
        self.assertRaises(ValueError, search_images, property_ids, cursor)
    
    def test_someElementInListIsString(self):
        property_ids = [1, 2, '3']
        cursor = "some object"
        self.assertRaises(ValueError, search_images, property_ids, cursor)
    
    def test_cursorIsNone(self):
        property_ids = [1, 2, 3]
        cursor = None
        self.assertRaises(ValueError, search_images, property_ids, cursor)
        
        
        
        