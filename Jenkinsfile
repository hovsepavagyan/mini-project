pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            junit 'playwright-report/*.xml' // если генерируешь junit-репорты
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}