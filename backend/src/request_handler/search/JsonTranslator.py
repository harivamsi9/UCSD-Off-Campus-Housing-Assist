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
        # value_list.append(search_images(property_id,cur))
        value_list.append(search_review(property_id,cur))
        search_res[property_id] = value_list

    print(search_res)
    print(search_res[1][0])
    print(search_res[1][1])

    # json_object = json.dumps(search_res, indent = 4)
    # print(json_object)

    return property_table



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

# This function will return a list of images info regrading the given property_id
# param: property_id, cur
# return: list of images info that can help to find the images in frontend
def search_images(property_id,cur):
    # TO DO:

    res = []
    return res

# This function will return a list of reviews regrading the given property_id
# param: property_id, cur
# return: list of review (tuple of property_id, date, comment and rating)
def search_review(property_id,cur):
    s = "SELECT * FROM review WHERE propertyid = (%s)"
    cur.execute(s,[property_id]) # Execute the SQL
    res = cur.fetchall()
    return res


# This function convert the dict to JSON that frontend requires
def search_assembler(search_res):
    return 0