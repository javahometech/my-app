# my-app

This Project is created to demonstrate the CI CD pipeline through Jenkins. 
Please refer the pipeline code "CI CD Pipeline code for this project" in order to implement the same.
Below are the steps followed by me to perform the same--

1. Pull the code from git hub.
2. Build the code with Maven.
3. Add the sonarqube scanner which will scan the code. Sonarqube must be installed on local host. In orer to condifure the Sonarqube with jenkins below are the steps-
   manage plugins-->SonarQube Scanner for Jenkins
   configure system--> name-->give any name
                       Server URL--> Sonarqube url (http://localhost:9000)
                       Server authentication token-->go to sonarqube-->administration-->security-->users-->tokens-->generate tokens
   global tool configuration-->Sonarqube scanner-->addsonarqubescanner
                       	Name-->any name (sonarqube scanner3.0.3)
                        click on install automatically
                        select version (3.0.3.778)
4. Add the unit testing.
5. Build docker image with the help of docker file. In docker file we are just copying the war file.
6. Push the image on docker hub. If you do not have dockerhub acount please create the same ans then push the image.
7. Run the container on Dev Server.
8. Run the container on QA server.
9. Run the container on PROD Server.
10. Configure the email notification which will send the email to specified recepient.
                      install plugins regarding emails.
                      go to system configuration--> E-mail Notification
                      SMTP server-->smtp.gmail.com
                      click on "use smtp authentication"
                      username--> youremaiid@domain.com
                      password-->
                      click on "use ssl"
                      SMTP port-->465
                      Charset--> UTF-8

