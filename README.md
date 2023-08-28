# Cypress UI Ecommerce Automation Readme

This repository contains automated tests for an eCommerce web application using Cypress, a modern end-to-end testing framework built for the web. These tests are designed to ensure the functionality, and reliability of the eCommerce application.

## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed (version 16 or higher)

## Getting Started
To get started with the Cypress UI Ecommerce Automation, follow these steps:

### Clone this repository to your local machine using Git:
```bash
git clone https://github.com/kdayal/lumaUIAutomation.git
```

### Navigate to the project directory:
```bash
cd lumaUIAutomation
```

### Install the required dependencies:
```bash
npm install
```

### Update cy.config.js with appropriate credentials:

Open the cy.config.js file and update the username and password fields with valid credentials for the eCommerce application. This will allow the tests to log in and interact with the application using the provided credentials.

### Run Cypress tests:

To run the tests, use the following command:
```bash
npx cypress open
```
This will open the Cypress Test Runner, where you can select and run individual test files or run all tests.