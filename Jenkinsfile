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
               sshagent(['tomcat-dev']) {
                   sh "scp -o StrictHostKeyChecking=no target/myweb.war ec2-user@172.31.46.32:/opt/tomcat8/webapps/"
                   sh "ssh ec2-user@172.31.46.32 /opt/tomcat8/bin/shutdown.sh"
                   sh "ssh ec2-user@172.31.46.32 /opt/tomcat8/bin/startup.sh"
               }
            }
        }
    }
    post {
      always {
        cleanWs()
      }
    }
}
