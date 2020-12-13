@Library('javahome-libs') _

pipeline{
    agent any
    options {
      timeout(30)
    }
    stages{
        
        stage('Maven and Sonar'){
            
            parallel{
            stage('Sonar Analysis'){
                steps{
                    withSonarQubeEnv('sonar7') {
                        sh 'mvn sonar:sonar'
                    }
                    
                    timeout(time: 1, unit: 'HOURS') {
                        script{
                          def qg = waitForQualityGate()
                          if (qg.status != 'OK') {
                              error "Pipeline aborted due to quality gate failure: ${qg.status}"
                          }
                        }
                  }
                }
            }
            
             stage('Mvn Build'){
                steps{
                    sh 'mvn clean package'
                }
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
