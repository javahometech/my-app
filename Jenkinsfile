node{
   stage('SCM Checkout'){
     git 'https://github.com/javahometech/my-app'
   }
   stage('Compile-Package'){
      // Get maven home path
      def mvnHome =  tool name: 'maven-3', type: 'maven'   
      sh "${mvnHome}/bin/mvn package"
   }
   stage('Email Notification'){
      mail bcc: '', body: '''Hi Welcome to jenkins email alerts
      Thanks
      Hari''', cc: '', from: '', replyTo: '', subject: 'Jenkins Job', to: 'hari.kammana@gmail.com'
   }
   stage('Slack_notification'){
       slackSend baseUrl: 'https://hooks.slack.com/services/', 
                 botUser: true,color: 'good', message: 'Welcome to jenkins, Slack!', teamDomain: 'javahomecloud', tokenCredentialId: 'slack-demo'

   }

}
