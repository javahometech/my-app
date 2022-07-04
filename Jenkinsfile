pipeline {
  agent any
  stages{
    stage("SCM Checkout"){
      steps{
        git credentialsId: 'javahometech', url: 'https://github.com/javahometech/my-app', branch: "master"
      }
    }
    stage("Maven Build"){
      steps{
        sh "mvn clean package"
      }
    }
  }
}
