node {
  stage ('SCM Checkout') {
    git 'https://github.com/ssg543/Jenkins-Demo/'
  }
  stage ('Compile-Package') {
    sh 'mvn package'
  }
}
  
