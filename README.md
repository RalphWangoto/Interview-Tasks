Overview
This is a scalable and modular Cypress automation framework designed for end-to-end (E2E) testing of web applications. It follows best practices by separating test specs, reusable page modules, utilities, and configurations, ensuring maintainability and efficiency.
The framework supports UI and API testing, organizes test cases by modules and submodules, and includes custom commands, fixtures, and plugins for optimized automation.

--------
Project Structure

cypress/
├── e2e/                            # Contains all end-to-end test specs
│   ├── login/                      # Modules folder structure format
│   │   ├── login.cy.js             # Spec Files
│   ├── add-to-cart/  
|        ├── add-to-cart.cy.js             
|
├── page-modules/                  # Reusable page locators + helper functions
│   ├── LoginPage.js               # Login page locators and methods
│   ├── AddToCart.js               # User management page locators and methods
|
├── support/  
|   ├── helpers                    # Contains Helper Functions that are reused through out.
│   ├── commands.js                # Custom Cypress commands
│   ├── utils.js                   # Utility functions (e.g., data generators)
│   ├── index.js                   # Cypress support setup
│
├── fixtures/                      # Test data in JSON format
│   ├── userData.json              # Sample user data
│
├── downloads/                     # Stores downloaded test files
├── screenshots/                   # Stores screenshots on test failures
├── videos/                        # Stores test recordings
├── reports/                       # Stores test reports
│
├── cypress.config.js              # Cypress configuration file
├── cypress.env.json               # Environment-specific variables
├── package.json                   # Project dependencies
├── .gitignore                     # Files to ignore in version control
├── README.md                      # Project documentation

---------
Running Tests:

🔹 Run all UI tests:

    npx cypress run --spec 'cypress/e2e/**/*.js'

🔹 Run a specific UI test:

    npx cypress run --spec "'cypress/e2e/**/{fileName}.js'

🔹 Run Cypress in interactive mode:

    npx cypress open

🔹 Run API tests only:

    npx cypress run --spec "cypress/e2e/**/*.api.cy.js"

--------
Configuration

Cypress Configuration

    All global settings can be found in cypress.config.js. Modify it as needed.

Environment Variables

    Sensitive data or environment-specific configurations should be stored in cypress.env.json:

-------
Reporting
Test execution results are automatically stored in the reports/ directory.
To generate a detailed report, run:

npx cypress run --reporter mochawesome
We also have a cypress custom report (Main report for this project) that reads data from the mochawesome .json report. Use the following command after test is run to completion to generate a custom-report.html

node generate-custom-report.js
-------

Contributing
Feel free to contribute by submitting pull requests. Follow these steps:

Clone the repository
Create a feature branch (git checkout -b feature-name)
Commit your changes (git commit -m "Added feature XYZ")
Push to your branch (git push origin feature-name)
Submit a Pull Request 
-------

About the Author
Built by Raphael Wangoto – Senior Quality Assurance Engineer | Cypress Guru 😎
For inquiries, reach out via [LinkedIn](https://www.linkedin.com/in/
raphael-wangoto-qaconsultant6416b8143) or GitLab.

--------
Future Enhancements


 Implement parallel test execution with Cypress Dashboard

 Add visual regression testing with Percy

 Improve test data management with dynamic fixtures

 Set Up CI/CD pipeline
