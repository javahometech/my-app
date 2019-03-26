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
  stage ('email-notification'){
    mail bcc: '', body: '''welcome to jenkins
 hai hello''', cc: '', from: '', replyTo: '', subject: '', to: 'chowdaryharish0@gmail.com'
  }
   stage ('sonar-qube'){
  withsonarQube ENV('sonar')
}
  
}
