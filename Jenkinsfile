pipeline {
  agent any
  tools {
    maven 'maven2'
  }
  stages{
    stage("Maven Build"){
      steps{
        sh "mvn clean package"
      }
    }
   }
}
