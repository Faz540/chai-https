[![Daily API Tests](https://github.com/Faz540/chai-https/actions/workflows/daily-testing.yml/badge.svg)](https://github.com/Faz540/chai-https/actions/workflows/daily-testing.yml)

# API Testing Framework

A lightweight and easy-to-use API testing framework using Mocha and Chai.

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

This will run all of the tests in the `tests/` directory and display the results in the terminal.

To run the linter, use the following command:

```
npm run lint
```

This will check the code for style and syntax errors using ESLint.

## Docker

```
// Or Docker Compose
docker-compose up --abort-on-container-exit

```

## Contributing

Contributions are welcome! To contribute, fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
This README.md file includes instructions for installing and using the framework, as well as information on how to contribute and the license that the framework is released under. You can customize the contents of the file to suit your needs.