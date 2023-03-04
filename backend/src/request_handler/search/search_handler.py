from src.db_adapters.query_builder import Query

def search_filter(IDatabase, body: dict) -> dict:
    """
    Does a query to the database to get the list of
    properties related to the filters in the body

    Args:
        IDatabase (DatabaseInterface): provides functionality
            to access the database
        body (dict): the filters for this search

    Returns:
        response (json): a json dictionary for the frontend
    """
    print(f"\n\nProcessing request with data:\n{body}\n\n")
    property_table = search_property(IDatabase, body["data"])
    print(property_table)
    search_res = {}
    for property in property_table:
        property_id = property[0] # property_id stores in index 0
        value_list = []
        value_list.append(property)
        #value_list.append(search_images(property_id,cur))
        #value_list.append(search_review(property_id, cur))
        search_res[property_id] = value_list
    

def search_images(IDatabase, property_id: int) -> list[str]:
    query = Query()
    query.set_from("picture")
    query.add_condition("propertyid", "=", property_id, isColumnString=False)
    instruction = str(query)
    results = IDatabase.query(instruction)
        

def search_property(IDatabase, data: dict) -> list[tuple]:    
    mapping_frontend_to_db = {}
    mapping_frontend_to_db["bedroom"] = "bedroom"
    mapping_frontend_to_db["bathroom"] = "bathroom"
    mapping_frontend_to_db["priceRange"] = "monthlyrent"
    mapping_frontend_to_db["location"] = "location"
    mapping_frontend_to_db["squareFeet"] = "sqft"
    mapping_frontend_to_db["commuteTime"] = "commutetime"
    stringColumns = ["location"]
    
    query = Query()
    query.set_from("property")
    
    for filter in data:
        filter_value = data[filter]
        
        if filter not in mapping_frontend_to_db:
            print(f"Not prepared for filter {filter}")
            raise ValueError
        
        column = mapping_frontend_to_db[filter]
        
        # First case, the filter is like 1000-2000 or -15
        if "-" in str(filter_value):
            
            # case: -1000 represents <= 1000
            if filter_value[0] == "-":
                number = filter_value[1:] 
                query.add_condition(column, "<=", number, isColumnString = (column in stringColumns))
            
            # case: 1000-2000 represents >= 1000 and <= 2000
            else:
                number1, number2 = filter_value.split("-")
                query.add_condition(column, ">=", number1, isColumnString = (column in stringColumns))
                query.add_condition(column, "<=", number2, isColumnString = (column in stringColumns))
        
        # Second case, the filter is like +15 represents >= 15
        elif "+" in str(filter_value):
            number = filter_value[:-1]
            query.add_condition(column, ">=", number, isColumnString = (column in stringColumns))
        
        # Last case, its an equal condition
        else:
            query.add_condition(column, "=", filter_value, isColumnString = (column in stringColumns))
            
    
    instruction = str(query)
    print(f"\n\nabout to do query:\n{instruction}\n")
    results = IDatabase.query(instruction)
    print(results)
    return results
    