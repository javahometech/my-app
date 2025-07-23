@Library("jhc-libs") _

pipeline{
    agent any
    environment{
        TOMCAT_USER="ec2-user"
        TOMCAT_IP="172.31.11.38"
    }
    stages{
        stage("Code Checkout"){
            steps{
                git credentialsId: 'github-creds', url: 'https://github.com/javahometech/my-app'
            }
        }
        stage("Maven Build"){
            steps{
                sh 'mvn clean package'
            }
        }
        stage("Tomcat Deploy"){
            steps{
                tomcatDeploy()
            }
        }
    }
}
