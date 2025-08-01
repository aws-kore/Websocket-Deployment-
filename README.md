Dockerise App – Create Dockerfile for WebSocket server.

Build & Test Locally – Run with docker build and docker run.

Push to ECR – Create ECR repo, authenticate, push image.

Create ECS Cluster – Use AWS Console or CLI (create-cluster).

Define Task – Register Fargate-compatible task with container config.

Set Up Networking – Ensure VPC, subnets, and security group allow WebSocket port.

Create ALB – Set up Application Load Balancer + Target Group (HTTP/1.1).

Deploy Service – Use ECS Fargate service linked to ALB and task definition.

Access WebSocket – Connect using ws://<ALB-DNS>:<port>.
