node{
  stage ('scm checkout'){
    git 'https://github.com/harikrishhh/my-app'
  }
  stage ('compile-package'){
  sh 'mvn-package'
}
}
