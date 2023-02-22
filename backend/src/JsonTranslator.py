from flask import request
import sys
sys.path.append("..")



# param: Json, cour
# return: Json
def searchQuery(cur):
    # parse json to get data
    data = request.json.get("data")
    print("received!")
    print(data)
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
