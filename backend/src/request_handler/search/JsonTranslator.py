from flask import request
import sys
import json
sys.path.append("../../..")



# param: Json, cour
# return: Json
def searchQuery(cur):
    # parse json to get data
    data = request.json.get("data")
    print("received!")
    print(data)
    property_table = search_property(data,cur)

    # format: {
    #   property_id -> [
    #       property:()
    #       images:[()]
    #       reviews:[()]
    #   ]
    # }
    search_res = {}

    for property in property_table:
        # property_id stores in index 0
        property_id = property[0]

        value_list = []
        value_list.append(property)
        value_list.append(search_images(property_id,cur))
        # value_list.append(search_review(property_id,cur))
        search_res[property_id] = value_list

    print(search_res)
    # print(search_res[1][0])
    # print(search_res[1][1])
    # print(search_res[1][2])
    return search_assembler(search_res)

    # json_object = json.dumps(search_res, indent = 4)
    # print(json_object)

# params: JSON, connection to db
# return: Query result table (list of tuples)
def search_property(data,cur):
    # Check if 'bedroom' key exists
    if 'bedroom' in data:
        bedroom = data['bedroom'][0]
    else:
        bedroom = None

    if 'bathroom' in data:
        bathroom = data['bathroom'][0]
    else:
        bathroom = None

    # Check if 'priceRange' key exists
    if 'priceRange' in data:
        price_range = data['priceRange'].split("-")
    else:
        price_range = None

    # Check if 'location' key exists
    if 'location' in data:
        location = data['location']
    else:
        location = None

    # Check if 'squareFeet' key exists
    if 'squareFeet' in data:
        square_feet = data['squareFeet'].split("-")
    else:
        square_feet = None

    # Check if 'commuteTime' key exists
    if 'commuteTime' in data:
        commute_time = data['commuteTime'].split("-")
    else:
        commute_time = None

    # use data to do query
    s = "SELECT * FROM property"
    setHead = False  # indicate the whether WHERE has been set
    params = []

    # Add the filter if specified
    if bedroom:
        if setHead:
            s += " AND bedroom = (%s)"
        else:
            s += " WHERE bedroom = (%s)"
            setHead = True
        params += [bedroom]


    if bathroom:
        if setHead:
            s += " AND bathroom = (%s)"
        else:
            s += " WHERE bathroom = (%s)"
            setHead = True
        params += [bathroom]

    if price_range:
        if setHead:
            s += " AND monthlyrent BETWEEN %s AND %s"
        else:
            s += " WHERE monthlyrent BETWEEN %s AND %s"
            setHead = True
        params += price_range


    # if location:
    #     if setHead:
    #         s += " AND address = %s"
    #     else:
    #         s += " WHERE address = %s"
    #         setHead = True
    #     params += [location]
    #
    #
    # if square_feet:
    #     if setHead:
    #         s += " AND sqft BETWEEN %s AND %s"
    #     else:
    #         s += " WHERE sqft BETWEEN %s AND %s"
    #         setHead = True
    #     params += [square_feet]

    # need to figure out how to compute commute time
    # if commute_time:
    #     if setHead:
    #         s += " AND commute_time BETWEEN %s AND %s"
    #     else:
    #         s += " WHERE commute_time BETWEEN %s AND %s"
    #         setHead = True
    #     params += [commute_time]


    print(params)
    cur.execute(s,params) # Execute the SQL
    res = cur.fetchall()

    return res

# # This function will return a list of images info regrading the given property_id
# # param: property_id, cur
# # return: list of images info that can help to find the images in frontend
# def search_images(property_ids: list[int], cur) -> list[tuple]:
#     """
#     This function will return the set of path_images related to every image given in
#     the input property_ids
#
#     Args:
#         - property_ids (list[int]): list of property ids, if no property id comes, this
#         should be an empty list
#         - cur (TODO this should not be here it is postgres-specific): the object
#         to do queries to the DB
#
#     Returns:
#         - result (list[tuple]): the output of the query. If there is no result, this
#         will return an empty list
#     """
#
#     # Check that the input is a list
#     if not isinstance(property_ids, list):
#         raise ValueError(f"property_ids is not a list, it is {type(property_ids)}")
#
#     # Check that the cursor is not None
#     if cur is None:
#         raise ValueError("cursor is None")
#
#     # Check how many ids are being asked
#     num_ids = len(property_ids)
#
#     # Check if the list is > 0, then all the elements are ints
#     if num_ids > 0:
#         if not all(type(x) is int for x in property_ids):
#             raise ValueError(f"Some elements of property_ids are not ints {property_ids}")
#
#     result = []
#
#     if num_ids > 0:
#
#         # Define the query
#         query = "select * from picture where propertyid in ("
#         for i, id in enumerate(property_ids):
#             query += str(id)
#             # Add a "," if this is not the last element
#             if i < num_ids-1:
#                 query += ","
#         query += ")"
#
#         cur.execute(query) # execute the sql
#         result = cur.fetchall()
#
#     return result

    

# This function will return a list of reviews regrading the given property_id
# param: property_id, cur
# return: list of review (tuple of property_id, date, comment and rating)
def search_review(property_id,cur):
    s = "SELECT * FROM review WHERE propertyid = (%s)"
    cur.execute(s,[property_id]) # Execute the SQL
    res = cur.fetchall()
    return res

def search_images(property_id, cur):
    s = "SELECT * FROM picture WHERE propertyid = (%s)"
    cur.execute(s,[property_id]) # Execute the SQL
    res = cur.fetchall()
    return res


# This function convert the dict to JSON that frontend requires
def search_assembler(search_res):
    data = {}
    res_list = []

    for prop in search_res.values():
        property_info = prop[0]
        property_images = prop[1]
        # property_reviews = prop[2]

        format_dict = {}
        format_dict["propertyID"] = property_info[0]
        format_dict["bedrooms"] = property_info[1]
        format_dict["bathrooms"] = property_info[2]
        format_dict["sqft"] = property_info[3]
        format_dict["monthly_rent"] = property_info[4]
        format_dict["address"] = property_info[5]
        format_dict["contact"] = property_info[6]
        format_dict["images"] = ["../images/" + x[1] for x in property_images]
        format_dict['reviews'] = []

        res_list.append(format_dict)

    data['result'] = res_list
    json_data = json.dumps(data)

    return json_data
