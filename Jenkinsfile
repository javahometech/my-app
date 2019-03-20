node{
  stage ('scm checkout'){
  git 'https://github.com/harikrishhh/my-app/'  
    
  }
  node
    stage ('maven build'){
      sh 'mvn package'
    }
  
  
}


