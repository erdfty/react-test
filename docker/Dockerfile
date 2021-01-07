FROM nginx
MAINTAINER hanson.hang <21474620@qq.com>
ADD app.tar.gz /usr/share/nginx/html/
ADD default.conf /etc/nginx/conf.d/default.conf
ADD init.sh /init.sh
RUN chmod +x /init.sh
EXPOSE 80
ENTRYPOINT ["/init.sh","nginx","-g","daemon off;"]