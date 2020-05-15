FROM tomcat:8.0.20-jre8
# Take the war and copy to webapps of tomcat
COPY target/*.war /usr/local/tomcat/webapps/myweb.war
