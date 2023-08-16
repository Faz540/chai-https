[![API Testing Workflow](https://github.com/Faz540/chai-https/actions/workflows/api-testing.yml/badge.svg?branch=main)](https://github.com/Faz540/chai-https/actions/workflows/api-testing.yml)

# API Testing Framework

A lightweight and easy-to-use API testing framework using Mocha and Chai.

This repo is to demonstrate my ability to create an Automated API Testing Framework.

## Framework Checklist:
```
[/] Create README
[/] Install all project depdencies via Terminal
[/] Execute all tests through Terminal
[/] Abstract the actual API requests out of the spec files
[/] Containerize and execute tests using Docker
[/] Create GitHub Action Workflow to execute tests in the cloud when needed
[/] Improve GitHub Action Workflow to execute tests with every PR/Push.
```

## Installation

To install the framework, clone the repository and install the dependencies:

```
git clone https://github.com/Faz540/chai-https.git
cd chai-https
npm install
```

Be sure to make a copy of the `.env.example` file and rename it to `.env`
```
cp .env.example .env
```

## Usage

To run the tests, use the following command:

```
npm test
```

This will run all of the tests in the `./tests/` directory and display the results in the terminal.

To run the linter, use the following command:

```
npm run lint
```

This will check the code for style and syntax errors using ESLint.

## Docker
You can also execute the tests inside a Docker container, the only dependency for this is to have Docker installed.

```
docker-compose up --abort-on-container-exit
```
