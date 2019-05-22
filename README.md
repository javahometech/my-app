# my-app

This Project is created to demonstrate the CI CD pipeline through Jenkins. 
Please refer the pipeline code "CI CD Pipeline code for this project" in order to implement the same.
Below are the steps followed to perform the same--

1. Pull the code from git hub.
2. Build the code with Maven.
3. Add the sonarqube scanner which will scan the code. Sonarqube must be installed on local host. 
   In orer to configure the Sonarqube with jenkins below are the steps-
   a. manage plugins-->SonarQube Scanner for Jenkins
   b. configure system--> name-->give any name
                       b.1 Server URL--> Sonarqube url (http://localhost:9000)
                       b.2 Server authentication token-->go to sonarqube-->administration-->security-->users-->tokens-->generate tokens
   c. global tool configuration-->Sonarqube scanner-->addsonarqubescanner
                       c.1 	Name-->any name (sonarqube scanner3.0.3)
                       c.2 click on install automatically
                       c.3 select version (3.0.3.778)
4. Add the unit testing.
5. Create a docker container with the help of Dockerfile which should contain the "war" file build by maven.
6. Push the image on docker hub. If you do not have dockerhub acount please create the same ans then push the image.
7. Run the container on Dev Server.
8. Run the container on QA server.
9. Run the container on PROD Server.
10. Configure the email notification which will send the email to specified recepient.
                      a.install plugins regarding emails.
                      b.go to system configuration--> E-mail Notification
                      c.SMTP server-->smtp.gmail.com
                      d.click on "use smtp authentication"
                      e.username--> youremaiid@domain.com
                      f.password-->
                      g.click on "use ssl"
                      h.SMTP port-->465
                      i.Charset--> UTF-8

