import sys
sys.path.append("../") # https://stackoverflow.com/questions/4383571/importing-files-from-different-folder
import unittest # documentation here: https://docs.python.org/3/library/unittest.html
from unittest.mock import MagicMock # https://docs.python.org/3/library/unittest.mock.html#quick-guide
from unittest.mock import create_autospec
from src.request_handler.search.JsonTranslator import search_images

class TestSearchImages(unittest.TestCase):
    
    def setup_cursor_mock(self):
        self.cursorMock = MagicMock()               
        def mock_execute(query: str):
            pass
        def mock_fetchall ():
            pass
        self.cursorMock.execute = create_autospec(mock_execute, return_value=None)
        self.cursorMock.fetchall = create_autospec(mock_fetchall, return_value=None)
    
    def test_emptyList(self):
        property_ids = []
        cursor = "some object"
        result = search_images(property_ids, cursor)
        self.assertEqual(len(result), 0)
    
    def test_wrongInputList(self):
        cursor = "some object"
        self.assertRaises(ValueError, search_images, "abc", cursor)
        self.assertRaises(ValueError, search_images, {}, cursor)
        self.assertRaises(ValueError, search_images, None, cursor)
        self.assertRaises(ValueError, search_images, 1, cursor)
        self.assertRaises(ValueError, search_images, 1.9, cursor)
        self.assertRaises(ValueError, search_images, (1,2,3), cursor)
        
    def test_someElementInListIsNotInt(self):
        cursor = "some object"
        self.assertRaises(ValueError, search_images, [1, 2, 3.0], cursor)
        self.assertRaises(ValueError, search_images, [1, 2, None], cursor)
        self.assertRaises(ValueError, search_images, [1, 2, "3"], cursor)
        self.assertRaises(ValueError, search_images, [1, 2, []], cursor)
        self.assertRaises(ValueError, search_images, [1, 2, {}], cursor)
    
    def test_cursorIsNone(self):
        property_ids = [1, 2, 3]
        cursor = None
        self.assertRaises(ValueError, search_images, property_ids, cursor)
    
    def test_cursorCalledWithSingleIds(self):        
        self.setup_cursor_mock()
        result = search_images([10], self.cursorMock)
        expected_query = "select * from picture where propertyid in (10)"        
        self.cursorMock.execute.assert_called_once_with(expected_query)
        self.cursorMock.fetchall.assert_called_once_with()
    
    def test_cursorCalledWithMultipleIds(self):        
        self.setup_cursor_mock()
        result = search_images([1,2,3,4,5,6,7,8,9,10], self.cursorMock)
        expected_query = "select * from picture where propertyid in (1,2,3,4,5,6,7,8,9,10)"        
        self.cursorMock.execute.assert_called_once_with(expected_query)
        self.cursorMock.fetchall.assert_called_once_with()
        
        
        
        
        
        