# ExpressJS Boilerplate

A simple boilerplate project for starting an ExpressJS application with basic configurations for ESLint, Prettier, and Jest.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Overview

This boilerplate provides a starting point for ExpressJS applications, including basic setup for linting, code formatting, and testing. It is designed to help you quickly set up a new project with common tools and configurations.

## Features

- **ExpressJS**: A minimal and flexible Node.js web application framework.
- **ESLint**: Linting tool to identify and report on patterns in JavaScript.
- **Prettier**: Code formatter to ensure consistent style.
- **Jest**: Testing framework for JavaScript.
- **Supertest**: SuperAgent driven library for testing HTTP servers.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jkrana008/expressjs-simple-boiler-plate.git
   cd expressjs-simple-boiler-plate
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the Application:**

   ```bash
   npm start
   ```

   The server will start on port 3000 by default. You can change the port by setting the `PORT` environment variable.

2. **Run the Application in Development Mode:**

   ```bash
   npm run dev
   ```

   This will start the server with `nodemon` to automatically restart on changes.

## Testing

1. **Run Tests:**

   ```bash
   npm test
   ```

   This will run the test suite using Jest.

## Scripts

- **`start`**: Starts the server with `node server.js`.
- **`dev`**: Starts the server with `nodemon server.js` for development.
- **`lint`**: Runs ESLint to check for linting issues.
- **`format`**: Runs Prettier to format code.
- **`test`**: Runs Jest tests.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code passes all tests and adheres to the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
