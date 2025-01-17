docker run --name geoserver --interactive --tty \
--publish 8085:8080 \
--volume "./shared_w_geoserver/data_dir/datasets":"/opt/geoserver/data_dir/datasets" \
-e GEOSERVER_ADMIN_USER=murat \
-e GEOSERVER_ADMIN_PASSWORD=password \
kartoza/geoserver
