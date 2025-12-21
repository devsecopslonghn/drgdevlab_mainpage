pipeline {
  agent { label 'eztech2' }

  environment {
    IMAGE_NAME = "personal-site"
    CONTAINER_NAME = "personal-site"
    APP_PORT = "8080"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        sh '''
          docker build -t $IMAGE_NAME:latest .
        '''
      }
    }

    stage('Stop Old Container') {
      steps {
        sh '''
          docker rm -f $CONTAINER_NAME || true
        '''
      }
    }

    stage('Run New Container') {
      steps {
        sh '''
          docker run -d \
            --name $CONTAINER_NAME \
            -p ${APP_PORT}:80 \
            $IMAGE_NAME:latest
        '''
      }
    }

    stage('Verify') {
      steps {
        sh '''
          docker ps | grep $CONTAINER_NAME
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Deploy thành công tại http://<SERVER_IP>:${APP_PORT}"
    }
    failure {
      echo "❌ Deploy thất bại, kiểm tra log Jenkins"
    }
  }
}
