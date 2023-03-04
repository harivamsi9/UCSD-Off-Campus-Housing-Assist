import json

def get_config(filename = "./backend/config.json"):
    # https://www.askpython.com/python/dictionary/convert-json-to-a-dictionary
    file = open(filename, 'r')
    json_data = json.load(file)
    file.close()
    return json_data
