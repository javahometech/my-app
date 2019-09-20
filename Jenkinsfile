pipeline {
    agent any
    environment{
	PATH = "/opt/maven3/bin:$PATH"
    }
    options {
        timeout(time: 1, unit: 'HOURS')
        skipDefaultCheckout()
        stages {
            stage ('Check Out') {
                steps {
                    script {


                        git 'https://github.com/sudharsansadasivam/my-app-1.git'


                    }

                }
            }
            stage('Compile Package'){
                steps{
                    script{

                        def mvnhome = tool name: 'maven-3', type: 'maven'
                        sh "${mvnhome}/bin/mvn package"

                    }
                }}


        }}}
