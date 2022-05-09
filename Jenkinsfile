@Library("javahome-libs") _
pipeline {
  agent any

    stages {
      stage('Maven Build') {
        steps {
          sh 'mvn clean package'
      }
    }
    stage('Deploy to Dev Tomcat') {
      steps {
        tomcatDeploy('172.31.9.112','app','tomcat-dev')
      }
    }
  }
  post {
    success {
      archiveArtifacts artifacts: 'target/*.war'
      cleanWs()
    }
  }
}
