pipeline{
    agent any
    tools{
        maven 'maven3'
    }
    stages{
        stage("Git Clone/Pull"){
            steps{
                git branch: 'master', credentialsId: 'github-acct', url: 'https://github.com/javahometech/my-app'
            }
        }
        stage("Maven Build"){
            steps{
                sh 'mvn clean package'
            }
        }
        stage("Deploy to Tomcat Dev"){
            steps{
                sshagent(['tomcat-dev']) {
                    // rename the war file
                    sh "mv target/*war target/myweb.war"
                    // copy war file to tomcat server
                    sh "scp -o StrictHostKeyChecking=no target/myweb.war ec2-user@172.31.40.104:/opt/tomcat8/webapps"
                    // stop and start tomcat
                    sh "ssh ec2-user@172.31.40.104 /opt/tomcat8/bin/shutdown.sh"
                    sh "ssh ec2-user@172.31.40.104 /opt/tomcat8/bin/startup.sh"
                }
            }
        }
    }
}
