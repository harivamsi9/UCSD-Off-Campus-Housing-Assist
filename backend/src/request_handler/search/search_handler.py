import json
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
    print(f"\n\nProcessing request with data:\n{body}")
    property_table = search_property(IDatabase, body["data"])
    
    # Assemble the final result in this list of dictionaries
    result = []
    
    # Add the external values of each property now (external queries)
    for property in property_table:
        print("THIS IS LINE 25 of search_handler.py. Below is property in property_table")
        print(property)
        result_dict = {}
        result_dict["propertyID"] = property[0]
        result_dict["bedrooms"] = property[1]
        result_dict["bathrooms"] = property[2]
        result_dict["sqft"] = property[3]
        result_dict["monthly_rent"] = property[4]
        result_dict["address"] = property[5]
        result_dict["location"] = property[6]
        result_dict["contact"] = property[7]
        result_dict["commute_time_to_ucsd"] = property[8]
        result_dict["images"] = search_images(IDatabase, result_dict["propertyID"])
        result_dict["website"] = "apartment.com"
        result_dict["reviews"] = search_review(IDatabase, result_dict["propertyID"])
        result_dict["historicRent"] = search_historic_rents(IDatabase, result_dict["propertyID"])
        result.append(result_dict)

    output = {}
    output["result"] = result
    json_data = json.dumps(output)
    return json_data


def search_historic_rents(IDatabase, property_id: int) -> list[dict]:
    query = Query()
    query.set_from("historicrent")
    query.add_condition("propertyid", "=", property_id, isColumnString=False)
    instruction = str(query)
    query_result = IDatabase.query(instruction)    
    output = []
    for line in query_result: # line is a tuple
        data_dict = {}
        data_dict["date_in"] = str(line[1])
        data_dict["date_out"] = str(line[2])
        data_dict["monthly_rent"] = str(line[3])
        output.append(data_dict)
    print(f"\nHistoric rent output for property id={property_id}:\n{output}")      
    return output


def search_review(IDatabase, property_id: int) -> list[dict]:
    query = Query()
    query.set_from("review")
    query.add_condition("propertyid", "=", property_id, isColumnString=False)
    instruction = str(query)
    query_result = IDatabase.query(instruction)    
    output = []
    for line in query_result: # line is a tuple
        data_dict = {}
        data_dict["date"] = str(line[1])
        data_dict["comment"] = line[2]
        data_dict["rating"] = line[3]
        output.append(data_dict)
    print(f"\nReviews output for property id={property_id}:\n{output}")
    return output
 

def search_images(IDatabase, property_id: int) -> list[str]:
    query = Query()
    query.set_from("picture")
    query.add_condition("propertyid", "=", property_id, isColumnString=False)
    instruction = str(query)
    query_result = IDatabase.query(instruction)    
    output = [x[1] for x in query_result]
    print(f"\nImages output for property id={property_id}:\n{output}")
    return output
        

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
    print(f"\nabout to do this query:\n{instruction}")
    #instruction = "SELECT * FROM property WHERE bedroom=2 AND bathroom=2" #AND monthlyrent>=1000 AND monthlyrent<=2000 AND location='La Jolla' AND sqft>=600 AND sqft<=1000 AND commutetime>=15 AND commutetime<=30;"
    results = IDatabase.query(instruction) 
    return results
    