FROM tomcat:8
LABEL app=Guru-app
COPY target/*.war /usr/local/tomcat/webapps/guruweb.war
# dummy commit



