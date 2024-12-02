docker run --interactive --tty \
--publish 8080:8080 \
--volume "./shared_w_geoserver":"/home/murat/geodata"\
 -e GEOSERVER_ADMIN_USER=murat\
 -e GEOSERVER_ADMIN_PASSWORD=password\
 kartoza/geoserver
