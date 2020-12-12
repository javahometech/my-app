@Library('javahome-libs') _

pipeline{
    agent any
    stages{
        stage('SCM'){
            steps{
                // git clone/pull
                git credentialsId: 'github', url: 'https://github.com/javahometech/my-app', branch: 'dev'
            }
        }
        
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
