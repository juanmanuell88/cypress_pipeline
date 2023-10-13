pipeline {
    agent any

    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/juanmanuell88/cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 13d29b47-2277-4d28-b9f2-8592c8aff5fd  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/juanmanuell88/cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 13d29b47-2277-4d28-b9f2-8592c8aff5fd  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/juanmanuell88/cypress_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 13d29b47-2277-4d28-b9f2-8592c8aff5fd  --parallel'
                    
                    }
                }
                  
            }

             
        }

    }
            
}