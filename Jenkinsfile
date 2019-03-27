node{
  stage ('scm checkout'){
    git 'https://github.com/harikrishhh/my-app'
  }

   
  
  stage ('compile'){
  sh 'mvn compile'
}
  stage ('test'){
    sh 'mvn test'
  }
   stage ('package'){
    sh 'mvn package'
  }
   
  
     stage ('deploy to tomcat'){
       
       sshagent(['9a0d6629-cf54-46ea-ada4-59b490e03e54']) {
    sh 'scp -o StrictHostKeyChecking=no target/*.war ec2-user@18.191.83.92:/home/ec2-user/tomcat8/webapps'
}
     }
       
   stage ('sonar-qube analysis'){
  withsonarQubeEnv('sonarqube')
}
   
}
  

