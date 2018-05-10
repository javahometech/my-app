FROM tomcat:8
# Take the war and copy to webapps of tomcat
COPY target/my-app.war /usr/local/tomcat/webapps/
