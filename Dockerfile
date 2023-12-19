FROM tomcat:8
LABEL app=my-app
//docker file added
COPY target/*.war /usr/local/tomcat/webapps/myweb.war
