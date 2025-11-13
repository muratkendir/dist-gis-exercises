# Import the native "requests" library to send a request to the web source.
import requests

# Replace the URL in the follwoing code with your selected URL
mydata = requests.get("https://intergeo33.bayernwolke.de/betty/c_hist/13/4197/4598")

#Check what the "mydata" object.
print(mydata)