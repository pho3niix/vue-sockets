pipeline {
  agent any
  stages {
    stage('hello world') {
      steps {
        echo 'Hola mundo'
        sh 'ls -la'
      }
    }

    stage('') {
      steps {
        mail(subject: 'Testing Mail', body: 'Hello from jenkins', cc: 'frijolito178@gmail.com', from: 'hugo.costillah@gmail.com')
      }
    }

  }
}