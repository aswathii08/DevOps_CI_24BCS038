pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Library Automation System - Checkout'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
                bat 'npm.cmd install'
            }
        }

        stage('Build') {
            steps {
                echo 'Checking JavaScript syntax'
                bat 'node --check src/library.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Running library tests'
                bat 'npm.cmd test'
            }
        }
    }

    post {
        success {
            echo 'Library Automation Pipeline Successful!'
        }
        failure {
            echo 'Pipeline Failed. Check Console Output.'
        }
    }
}