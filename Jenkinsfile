@Library('javahome-libs') _

pipeline{
    agent any
    stages{
        
        
        
        stage('Sonar Analysis'){
            steps{
                withSonarQubeEnv('sonar7') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
        
        /*
        
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
        */
    }
}
