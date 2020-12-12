@Library('javahome-libs') _

pipeline{
    agent any
    stages{
        
        stage('Mvn Build'){
            steps{
                sh 'mvn clean package'
            }
        }
        
        stage('Tomcat Deploy'){
            steps{
                tomcatDeploy("172.31.35.55","ec2-user","myweb")
            }
        }
    }
}
