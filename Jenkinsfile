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
                script {
                    def userInput = input(
                        id: 'userInput',
                        message: 'Do you want to deploy?',
                        parameters: [choice(name: 'Deploy', choices: 'Yes\nNo', description: 'Approve or reject deployment')]
                    )
                     if (userInput == 'Yes') {
                        echo 'Deployment approved. Proceeding to deploy stage.'
                    } else {
                        error 'Deployment rejected. Stopping the pipeline.'
                    }
                }
            }
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
  
