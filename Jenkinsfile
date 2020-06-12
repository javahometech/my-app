node{
   stage('SCM Checkout'){
      //github project URL
     git 'https://github.com/Sreedhar-Muktham/my-app'
   }
   stage('Compile-Package'){
      // Get maven home path
      def mvnHome =  tool name: 'maven-3', type: 'maven'   
      sh "${mvnHome}/bin/mvn package"
   }
  }
