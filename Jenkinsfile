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
                bat 'npm ci'
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
            junit 'test-results/results.xml' // если генерируешь junit-репорты
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}