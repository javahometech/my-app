FROM tomcat:latest
COPY target/*.war /usr/local/tomcat/webapps/myweb.war
