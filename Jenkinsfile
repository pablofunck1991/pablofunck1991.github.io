pipeline {
  agent any
  stages {

    stage('check out code') {
      steps {
        git(url: 'https://github.com/pablofunck1991/pablofunck1991.github.io', branch: 'main')
      }
    }
      stage('check out code2') {
      steps {
        git(url: 'https://github.com/pablofunck1991/pablofunck1991.github.io', branch: 'main')
      }
    }
          stage('makke ls') {
      steps {
        sh 'ls'
      }
    }
  }
}