  node{
   stage('SCM Checkout'){
     git 'https://github.com/prabaharan0312126/my-app.git'
   }
   stage('Compile-Package'){
    
      def mvnHome =  tool name: 'maven3', type: 'maven'   
      sh "${mvnHome}/bin/mvn package"
   }
   stage('Build Docker Imager'){
   sh 'docker build -t prabaharanitlearn/myweb:0.0.2 .'
   }
   stage('Email Notification'){
      mail bcc: '', body: '''dummy Build is done
      Thanks
      prabha''', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'prabaharanitlearn@gmail.com'
   }
}


