node{
  stage ('scm checkout'){
    git 'https://github.com/harikrishhh/my-app'
  }

   
  
  stage ('compile'){
  sh 'mvn compile'
}
  
   stage ('package'){
    sh 'mvn package'
  }
   
  
   
  stage ('build docker image'){
   sh 'docker build -t chaitu9642/my-app:5.0.0 .'  
  }
  stage ('push docker image'){
    withCredentials([string(credentialsId: 'ba27155f-63b7-4601-96c6-343605f0ab28', variable: 'dockerhubpwd')]) {
    sh "docker login -u chaitu9642 -p ${dockerhubpwd}"
}
 sh 'docker push -t chaitu9642/my-app:5.0.0 .'  
  }
    
}
  

