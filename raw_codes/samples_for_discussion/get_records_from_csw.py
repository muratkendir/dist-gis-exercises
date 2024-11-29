# Get the CSW class from the OWSLib.
from owslib.csw import CatalogueServiceWeb

#Specify the 
my_csw = CatalogueServiceWeb('https://metaver.de/csw?')

from owslib.fes import PropertyIsLike

bremen_query = PropertyIsLike('csw:AnyText', 'Bremen')

my_csw.getrecords2(constraints=[bremen_query], maxrecords=10)

for x in my_csw.records:
  print(my_csw.records[x].title)