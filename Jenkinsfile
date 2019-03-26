node{
  stage ('scm checkout'){
    git 'https://github.com/harikrishhh/my-app'
  }
  stage ('compile'){
  sh 'mvn compile'
}
  stage ('test'){
    sh 'mvn test'
  }
   stage ('package'){
    sh 'mvn package'
  }
  
   stage ('sonar-qube analysis'){
  withsonarQubeEnv('sonar-6')
}
  
}
