FROM tomcat:8
USER root
RUN apt-get update \
      && apt-get install -y sudo \
      && rm -rf /var/lib/apt/lists/*
RUN echo "jenkins ALL=NOPASSWD: ALL" >> /etc/sudoers
 
USER jenkins
# Take the war and copy to webapps of tomcat
COPY target/*.war /usr/local/tomcat/webapps/
