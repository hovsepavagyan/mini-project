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

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run tests') {
            steps {
                // Запускаем сервер в фоне
                bat 'start /B npx serve -s . -l 8080'

                // Ждём несколько секунд, чтобы сервер поднялся
                bat 'timeout /t 5'

                // Запуск тестов
                bat 'npx playwright test'
            }
        }
    }


//         stage('Run tests') {
//             steps {
//                 bat 'npx playwright test'
//             }
//         }
//     }

    post {
        always {
            junit 'test-results/results.xml' // если генерируешь junit-репорты
            archiveArtifacts artifacts: 'test-results/results.xml', allowEmptyArchive: true
        }
    }
}