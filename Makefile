# Makefile for Portfolio Docker Operations

# Variables
IMAGE_NAME ?= davidjrdocker/portfolio-app
TAG ?= latest
DOCKER_REGISTRY ?= docker.io
CONTAINER_NAME ?= portfolio-app

# Colors for output
GREEN := \033[0;32m
NC := \033[0m # No Color

.PHONY: help build push pull up down restart logs clean deploy

# Default target
help:
	@echo "Available commands:"
	@echo "  make build   - Build the Docker image"
	@echo "  make push    - Build and push to Docker Hub"
	@echo "  make pull    - Pull the latest image from Docker Hub"
	@echo "  make up      - Start the container"
	@echo "  make down    - Stop the container"
	@echo "  make restart - Restart the container"
	@echo "  make logs    - View container logs"
	@echo "  make clean   - Remove dangling images"
	@echo "  make deploy  - Full deployment (down -> pull -> up -> clean)"

# Build the Docker image
build:
	@echo "$(GREEN)Building Docker image...$(NC)"
	docker build -t $(IMAGE_NAME):$(TAG) .

# Build and push to Docker Hub
push: build
	@echo "$(GREEN)Pushing image to Docker Hub...$(NC)"
	docker push $(IMAGE_NAME):$(TAG)

# Pull the latest image
pull:
	@echo "$(GREEN)Pulling latest image...$(NC)"
	docker pull $(IMAGE_NAME):$(TAG)

# Start containers
up:
	@echo "$(GREEN)Starting containers...$(NC)"
	docker-compose up -d

# Stop containers
down:
	@echo "$(GREEN)Stopping containers...$(NC)"
	docker-compose down

# Restart containers
restart: down up

# View logs
logs:
	docker-compose logs -f

# Remove dangling images
clean:
	@echo "$(GREEN)Cleaning dangling images...$(NC)"
	docker image prune -f

# Full deployment workflow (for VPS)
deploy: down pull up clean
	@echo "$(GREEN)Deployment complete!$(NC)"
