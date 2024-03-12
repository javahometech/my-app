node('master'){
    // Add maven to path
    env.PATH = "/opt/maven3/bin/:$PATH"
    
    stage('Git Clone/Pull'){
        git branch: 'dev', 
			url: 'https://github.com/javahometech/my-app'
    }
	
	stage('Build Docker Image'){
		sh "mvn clean package"
		sh "mv target/*.war target/myweb.war"
		sh "docker build -t kammana/my-app:1.0 ."
	}
	
	stage('Push Image'){
	  withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerHubPwd')]) {
         sh "docker login -u kammana -p ${dockerHubPwd}"
      }
	  sh "docker push kammana/my-app:1.0"
	}
	
	stage('Delete Old Container'){
	   sshagent (credentials: ['dev-docker']) {
	       try{
		     def dockrRm = "docker rm -f my-app"
			 def dockrRmImage = "docker rmi  kammana/my-app:1.0"
	         sh "ssh -o StrictHostKeyChecking=no ec2-user@172.31.43.90  ${dockrRm} "
			 sh "ssh -o StrictHostKeyChecking=no ec2-user@172.31.43.90  ${dockrRmImage} "
		   }catch(e){
			  echo "container my-app not found" 
		   }
	   }
	   
	}
	
	stage('Deploy On Dev'){
		sshagent (credentials: ['dev-docker']) {
		 def dockerRun = "docker run -d -p 8080:8080 --name=my-app kammana/my-app:1.0"
		 sh "ssh -o StrictHostKeyChecking=no ec2-user@172.31.43.90  ${dockerRun} "
		}
	}
    
}
