all: build up

up:
	docker-compose -f docker-compose.local.yml up

build:
	docker-compose -f docker-compose.local.yml build

destroy:
	docker-compose -f docker-compose.local.yml down -v
