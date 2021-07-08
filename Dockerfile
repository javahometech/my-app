FROM tomcat:8
COPY target/myweb-0.0.2-SNAPSHOT.war /usr/local/tomcat/webapps/myweb.war
