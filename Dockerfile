FROM tomcat:8
# Take the war and copy to webapps of tomcat
RUN mv target/myweb-0.0.1.war target/my-app.war
COPY target/my-app.war /usr/local/tomcat/webapps/
