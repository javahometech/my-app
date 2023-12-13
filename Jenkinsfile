node {
  stage ('SCM Checkout') {
    git 'https://github.com/ssg543/Jenkins-Demo/'
  }
  stage ('Compile') {
    def mvnHome = tool name: 'Maven-01', type: 'maven'
    sh "${mvnHome}/bin/mvn compile"
  }
  stage ('Package') {
    def mvnHome = tool name: 'Maven-01', type: 'maven'
    sh "${mvnHome}/bin/mvn package"
  }
  stage('Test') {
    def mvnHome = tool name: 'Maven-01', type: 'maven'
    sh "${mvnHome}/bin/mvn test"
  }
  stage('Approval') {
    steps {
      def userInput = input(message: 'Do you want to approve ?', submitter: 'Gopi S', timeout: 5)
      if userInput == 'Proceed') {
        echo "Approved"
      }
      else {
        echo "Approval Failed"
      }
  stage ('Deplpoy to Tomcat') {
    sshagent(['Linux_Slave']) {
      sh 'scp -o StrictHostKeyChecking=no target/*.war ec2-user@172.31.28.195:/tmp/'
    }
}
}
    stage ('Email Notification') {
      echo "Email Sent Successfully with the status of current jobs"
  }
  
