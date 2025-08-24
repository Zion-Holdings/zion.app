.PHONY: install test run build deploy clean

install:
	pip install -r requirements.txt

test:
	pytest tests/ -v

run:
	python src/main.py

build:
	docker build -t ai-ml-platform-demo .

deploy:
	docker-compose up -d

clean:
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
