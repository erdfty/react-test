#!/bin/bash
setEnv() {
    if [ ! -d "/usr/share/nginx/html/dist/static" ] || [ ! -f "/usr/share/nginx/html/dist/static/envTemplate.js" ]; then
        sleep 1s
        setEnv
    else
    fi
}
setEnv
set -e
echo -e $HOST_CONFIG >> /etc/hosts
exec "$@"
