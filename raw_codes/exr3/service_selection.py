# You can now define another function to interactively ask and store the knowledge data in your dictionary.

keys = ["name", "Url of SDI", "URL of WMS Service"]

my_services = {}

# Following line adds only the keys defined above. 
# These kind of inline functions called as comprehensions in Python. 
my_services[0] = {key: None for key in keys}
# print(my_services) 

def add_to_store(service_id, name, sdi_url, wms_url):
    # Here, you set a complex data in python dictionary data type.
    my_services[service_id] = { keys[0] : name, keys[1] : sdi_url , keys[2] : wms_url}
    print(my_services)

def found_service():
    service_id = input("Give an ID (number or unique value)...")
    service_data = [] # Created a list to save the values temporarily
    for i in range(3): # Meet another object here: range
        questionnaire = "Please specify the " + keys[i]
        service_data.append(input(questionnaire))
        i+=1
    #Note that a list index is very similar to range, but always starts from 0.
    add_to_store(service_id, service_data[0], service_data[1], service_data[2])

# found_service()
# my_services.clear()