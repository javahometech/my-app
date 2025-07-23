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
                sshagent(['tomcat-dev']) {
                    // Copy War file to Tomcat
                    sh "scp -o StrictHostKeyChecking=no target/*.war ${TOMCAT_USER}@${TOMCAT_IP}:/opt/tomcat10/webapps/"
                    // Stop and start Tomcat
                    sh "ssh ${TOMCAT_USER}@${TOMCAT_IP} /opt/tomcat10/bin/shutdown.sh"
                    sh "ssh ${TOMCAT_USER}@${TOMCAT_IP} /opt/tomcat10/bin/startup.sh"
                }
            }
        }
    }
}
