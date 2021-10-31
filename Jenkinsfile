node{
   stage('SCM Checkout'){
     git 'https://github.com/prabaharan0312126/my-app.git'
   }
   stage('Compile-Package'){
    
      def mvnHome =  tool name: 'maven3', type: 'maven'   
      sh "${mvnHome}/bin/mvn clean package"
	  sh 'mv target/myweb*.war target/newapp.war'
   }
   stage('Build Docker Imager'){
   sh 'docker build -t prabaharanitlearn/myweb:0.0.2 .'
   }
   stage('Docker Image Push'){
   withCredentials([string(credentialsId: 'dockerPass', variable: 'dockerPassword')]) {
   sh "docker login -u prabaharanitlearn -p ${dockerPassword}"
   }
   sh 'docker push prabaharanitlearn/myweb:0.0.2'
   }
    stage('Remove Previous Container'){
	try{
		sh 'docker rm -f tomcattest'
	}catch(error){
		//  do nothing if there is an exception
	}
   stage('Docker deployment'){
   sh 'docker run -d -p 8090:8080 --name tomcattest prabaharanitlearn/myweb:0.0.2' 
   }

   }
}
