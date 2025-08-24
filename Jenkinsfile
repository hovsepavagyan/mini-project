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
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npx playwright test'
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