@Library('javahome-libs') _

pipeline{
    agent any
    stages{
        
        stage('Mvn Build'){
            steps{
                sh 'mvn clean package'
            }
        }
        
        stage('Sonar Analysis'){
            steps{
                withSonarQubeEnv('sonar7') {
                    sh 'mvn clean package sonar:sonar'
                }
            }
        }
        
        stage('Tomcat Deploy'){
            steps{
                tomcatDeploy("172.31.35.55","ec2-user","myweb")
            }
        }
    }
}
