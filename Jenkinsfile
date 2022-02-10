
node{
  stage('Git Checkout'){
      git credentialsId: 'git-hub', url: 'https://github.com/javahometech/my-app'
  }
  stage('MVN Package'){
    def mvnHome = tool name: 'maven-3', type: 'maven'
    sh "${mvnHome}/bin/mvn clean package"
	}
	stage('Build Docker Image'){
    sh 'docker build -t sarath818/my-app:0.0.1 .'
  }
  stage('Upload Image to DockerHub'){
    withCredentials([string(credentialsId: 'docker-hub', variable: 'password')]) {
    sh "docker login -u sarath818 -p ${password}"
    }
    sh 'docker push sarath818/my-app:0.0.1'
  }
  stage('Remove Old Containers'){
    sshagent(['dev-docker']) {
      try{
        sh 'ssh -o StrictHostKeyChecking=no ec2-user@172.31.90.229 docker rm -f my-app'
        
      }catch(error){

      }
    }
  }
   stage('Deploy-Dev'){
    sshagent(['dev-docker']) {
    sh 'ssh -o StrictHostKeyChecking=no ec2-user@172.31.90.229'
     sh 'docker run -d -p 8080:8080 --name my-app sarath818/my-app:0.0.1'
  } 
 }
 }
