@Library('app-libs') _
pipeline{
    agent any
    stages{
        
        stage("Maven Build"){
            steps{
                sh 'mvn clean package'
                sh 'mv target/myweb*.war target/myweb.war'
            }
        }
        
        stage("Deploy to Tomcat Development"){
            steps{
               tomcatDeploy("172.31.46.32","tomcat-dev","myweb")
            }
        }
    }
    post {
      always {
        cleanWs()
      }
    }
}
