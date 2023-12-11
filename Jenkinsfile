node {
  stage ('SCM Checkout') {
    git 'https://github.com/ssg543/Jenkins-Demo/'
  }
  stage ('Compile-Package') {
    def mvnHome = tool name: 'Maven-01', type: 'maven'
    sh "${mvnHome}/bin/mvn package"
  }
}
  
