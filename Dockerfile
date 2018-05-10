FROM tomcat:8
# Take the war and copy to webapps of tomcat
RUN mv target/*.war target/my-app.war
COPY target/my-app.war /usr/local/tomcat/webapps/
