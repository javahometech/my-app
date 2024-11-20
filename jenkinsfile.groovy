node {
    stage('git checkout') {
        // Run on an agent labeled "maven"
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/artisenzubair/my-app.git']]])

    }
    stage('SonarQube Analysis') {
        // Run on an agent labeled "maven"
        withSonarQubeEnv('sonarqube') {
            withCredentials([string(credentialsId: 'sonarqube', variable: 'SONARQUBE_TOKEN')]) {
                // Run Maven and SonarQube analysis
                sh """mvn clean verify sonar:sonar \
                    -Dsonar.projectKey=demo \
                    -Dsonar.host.url=http://100.24.253.252:9000 \
                    -Dsonar.login=$SONARQUBE_TOKEN"""
            }
        }
    }
    stage('build') {
        // Run on an agent labeled "tomcat"
        node('tomcat') {
            // Run Maven build
            sh "mvn clean install"
        }
    }
    stage('tomcat') {
        // Run on an agent labeled "tomcat"
        node('tomcat') {
            // Copy the WAR file to Tomcat webapps directory
            sh "cp /home/ubuntu/workspace/assign/target/myweb-0.0.9.war /opt/tomcat/apache-tomcat-9.0.68/webapps/"
        }
    }
}
