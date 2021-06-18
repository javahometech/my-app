FROM tomcat:8
COPY target/*.war /usr/local/tomcat/webapps/
# Added to test webhook
