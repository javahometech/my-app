FROM tomcat:8
LABEL Sre=sreenu
LABEL app=my-app
COPY target/*.war /usr/local/tomcat/webapps/myweb.war
# testing webhook
