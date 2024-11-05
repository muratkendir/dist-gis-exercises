import json
import requests

def get_building_properties(custom_url):
    mydata = requests.get(custom_url)
    myjson = mydata.json()
    mysubset = myjson['properties']
    return mysubset

def save_property_as_list(my_object, file_name='request.txt'):
    # We implement an if-elif-else condition to consider empty input.
    if file_name == '':
        my_file_name = 'responses/exr2/' + 'request.txt'
    elif file_name == '-':
        my_file_name = 'responses/exr2/' + 'request.txt'
    else:
        my_file_name = 'responses/exr2/' + file_name
    
    with open(my_file_name, "w") as my_req:
        i=0
        for prop in my_object:
            i=i+1
            myformat = str(i) + ' : ' + prop + '\n' 
            my_req.write(myformat)
        print("List saved as a file :", my_file_name)
        # print(my_object)

requested_url = input("Enter the requested URL serves JSON : ")
building_properties = get_building_properties(requested_url)

custom_file_name = str(input("Specify a file name with extension : "))
save_property_as_list(building_properties, custom_file_name)

# Sample Inputs:
# https://www.ldproxy.nrw.de/kataster/collections/gebaeudebauwerk/items/DENW42AL1000NmHjBL?f=json
# my_request2.txt