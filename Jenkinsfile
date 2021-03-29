pipeline{
    agent any
    stages{
        stage("Nexus Download"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'nexus3', passwordVariable: 'password', usernameVariable: 'userName')]) {
                     sh "wget --user=${userName} --password=${password} '${params.nexusWarURL}'"
                }
            }
        }
    }
}
