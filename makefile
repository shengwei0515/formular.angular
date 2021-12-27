CONTAINER_REGISTRY_HOST = smallseal
IMAGE_NAME = formular.angular
IMAGE_TAG =  $(shell git rev-parse --abbrev-ref HEAD)

all: build push

build:
	docker build -t $(CONTAINER_REGISTRY_HOST)/$(IMAGE_NAME):$(IMAGE_TAG) \
				 --no-cache \
				 -f dockerfile .
push: 
	docker push $(CONTAINER_REGISTRY_HOST)/$(IMAGE_NAME):$(IMAGE_TAG)