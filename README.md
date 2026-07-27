# GITHUB-ACTIONS

# 🚀 End-to-End DevOps CI/CD Pipeline using GitHub Actions


## 📌 Project Overview

This project demonstrates the implementation of a complete **CI/CD automation pipeline** using GitHub Actions.

The main objective of this project is to understand and implement real-world DevOps practices including:

- Continuous Integration
- Continuous Deployment
- Automated Testing
- Docker Containerization
- Security Scanning
- Code Quality Analysis
- Self-hosted GitHub Actions Runner
- Deployment Automation
- Monitoring Integration


This repository contains multiple GitHub Actions workflows created while learning and implementing enterprise-level DevOps automation.


---

# 🏗️ Project Architecture


```
Developer
    |
    |
Git Push
    |
    |
GitHub Repository
    |
    |
GitHub Actions Pipeline
    |
    |
------------------------------------------------
|              |              |                 |
CI Pipeline    Security       Build             Deploy
               Scan           Docker            |
                |               |               |
             SonarQube       Docker Image      EC2 Server
                                |
                                |
                         Application Running
                                |
                                |
                     Prometheus + Grafana
                         Monitoring
```


---

# 🛠️ Technologies Used


## CI/CD

- GitHub Actions
- Jenkins
- GitHub Webhooks


## Containerization

- Docker
- Docker Images
- Docker Containers


## Cloud Platform

- AWS EC2


## Configuration Management

- Ansible


## Code Quality & Security

- SonarQube
- npm audit
- Code scanning


## Monitoring

- Prometheus
- Grafana
- Node Exporter
- cAdvisor


## Programming

- Node.js
- Python



---

# 📂 Repository Structure


```
.github/workflows

Contains all GitHub Actions automation workflows.


node-app

Node.js application used for CI/CD testing.


python-app

Python application used for Python CI pipeline testing.


docker-app

Docker build and container deployment examples.


sonar-project.properties

SonarQube project configuration file.

```



---

# ⚙️ GitHub Actions Workflows Implemented


## 1. Basic Workflow

### hello.yml

Purpose:

- Understand GitHub Actions basics
- Workflow triggers
- Jobs
- Steps


Concepts Learned:

- workflow_dispatch
- runs-on
- steps
- actions


---

# 2. CI Pipeline


### node-ci.yml


Pipeline:


```
Checkout Code

        |

Setup Node.js

        |

Install Dependencies

        |

Run Tests

        |

Build Application
```


Purpose:

Automate application testing and validation.


---

# 3. Python CI Pipeline


### python-ci.yml


Implemented:

- Python environment setup
- Dependency installation
- Automated testing



---

# 4. Artifact Management


### artifact-demo.yml

### node-artifact.yml


Learned:

- Creating build artifacts
- Uploading artifacts
- Downloading artifacts between jobs



---

# 5. Workflow Reusability


### reusable-build.yml

### call-reusable.yml


Implemented:

Reusable workflows using:

```
workflow_call
```


Benefits:

- Avoid duplicate code
- Maintain reusable pipeline components



---

# 6. GitHub Actions Advanced Concepts


Implemented:


## Conditions

```
if-condition-demo.yml
```


Used for:

- Conditional execution
- Failure handling



## Context Variables

```
context-demo.yml
```


Learned:

- github context
- runner context
- workflow information



## Environment Variables

```
env-demo.yml
```


Learned:

- Global variables
- Job variables
- Step variables



## Outputs


```
outputs-demo.yml
```


Implemented:

- Passing data between jobs



## Matrix Strategy


```
matrix-demo.yml
```


Implemented:

Testing multiple versions/environments.



## Concurrency


```
concurrency-demo.yml
```


Implemented:

- Prevent duplicate workflow execution
- Control parallel runs



---

# 7. Self Hosted Runner


Implemented:


```
docker-runner-test.yml
```


Configured:

- Self hosted GitHub Actions runner
- EC2 based runner


Runner:

```
seria
Linux x64
```


Benefits:

- More control over execution environment
- Access to private infrastructure



---

# 8. Docker CI/CD Pipeline


Implemented:


```
docker-build.yml
```


Pipeline:


```
Source Code

     |

Docker Build

     |

Docker Image

     |

Container Execution
```


---

# 9. Deployment Automation


Implemented:


```
deploy.yml

ssh-demo.yml
```


Deployment Flow:


```
GitHub Actions

        |

SSH Connection

        |

EC2 Server

        |

Docker Container Restart

```



---

# 10. Security and Code Quality


Implemented:


## SonarQube Integration


Files:


```
sonarqube-scan.yml

sonar-project.properties
```


Purpose:


- Static Code Analysis
- Code Quality Checking
- Vulnerability Detection



## Security Scan


```
security-scan.yml
```


Implemented:

- Dependency vulnerability checking
- Security validation



---

# 11. Monitoring Setup


Monitoring stack configured:


```
Prometheus

      |

Node Exporter

      |

Grafana Dashboard

      |

Application Metrics

```


Monitored:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Traffic
- Application Health



---

# 🔄 Complete CI/CD Flow


```
Developer Push Code

        |

GitHub Repository

        |

GitHub Actions Trigger

        |

Run Tests

        |

Security Scan

        |

SonarQube Analysis

        |

Docker Build

        |

Deploy Application

        |

Monitor using Grafana
```


---

# 📚 Key DevOps Concepts Learned


## GitHub Actions

- Workflow automation
- Jobs
- Steps
- Secrets
- Environments
- Runners
- Artifacts
- Reusable workflows


## CI/CD

- Automated testing
- Automated deployment
- Pipeline automation


## Docker

- Image creation
- Container management
- Application packaging


## Monitoring

- Metrics collection
- Visualization
- Alerting



---

# 🔮 Future Improvements


Planned enhancements:


- Kubernetes Deployment
- Helm Charts
- ArgoCD GitOps Deployment
- AWS IAM OIDC Authentication
- Terraform Infrastructure Provisioning
- Advanced Monitoring Alerts
- Complete Production Deployment Pipeline



---

# 👨‍💻 Author


**Nitin Kumar**

Computer Science Engineering

DevOps / Cloud Engineering Enthusiast


Skills:

- GitHub Actions
- Jenkins
- Docker
- Kubernetes
- Ansible
- AWS
- Prometheus
- Grafana


