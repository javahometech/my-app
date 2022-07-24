node{
   stage('SCM checkout'){
     git 'https://github.com/suryaswain402/my-stashjenkinsapp'
   }
   stage('Compile-package'){
    sh 'mvn package'
   }   
}
