pipeline{
    agent any
    triggers {
      pollSCM '* * * * *'
    }
    stages{
        stage("SCM"){
            steps{
               echo "job ran.....again and again"
            }
        }
    }
}
