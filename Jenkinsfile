node{
  stage ('scm checkout'){
  git 'https://github.com/harikrishhh/my-app/'  
    
  }
  
    stage ('maven build'){
      sh 'mvn package'
    }
  stage ('email-notification'){
    
  emailext body: 'welcome to jenkins', subject: '', to: 'chowdaryharish0@gmail.com'
  }
}


