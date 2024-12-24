# CypressTest Project

This is a QA Automation project built using the Cypress Framework. The project follows a Test-Driven Development (TDD) approach to create and manage integration tests. It enables testers to perform regression testing efficiently and reduce time spent on quality assurance. This README serves as a reference for the QA team.

## Folder Structure
The project is organized as follows:
```
cypress/
├── e2e/                # Contains test files for end-to-end testing
│   ├── page-object/    # Page Object Model (POM) implementations
│   └── specs/          # Individual test specifications
├── fixtures/           # Static test data and JSON files
└── support/            # Custom commands and test setup
.gitignore              # Files and folders to ignore in Git
README.md               # Project documentation
cypress.config.js       # Cypress configuration file
package-lock.json       # NPM dependency lock file
package.json            # Project metadata and dependencies
```

## Automation Engineer Requirements
- Cypress Framework
- JavaScript
- Test-Driven Development (TDD) principles
- Page Object Model (POM)
- Mocha, Chai (Test structures, assertions, and chainers)
- Git and GitHub version control

### Pre-installation Notes
#### For Mac Users:
- Update Homebrew and install Node.js and Yarn

#### General:
- Install Node.js
- Install Yarn

## Installation Notes
1. Initialize Git:
   ```bash
   git init
   git config --global user.name [Your Name]
   git config --global user.email [Your Email]
   ```
2. Generate an SSH key:
   ```bash
   ssh-keygen
   cat ~/.ssh/id_rsa.pub
   ```
   Add the key to your GitHub SSH settings.

3. Clone the repository:
   ```bash
   git clone [repository URL]
   ```

4. Install dependencies:
   ```bash
   npm install
   ```
   Or use:
   ```bash
   yarn
   ```

## Cypress Installation
1. Navigate to the project folder:
   ```bash
   cd CypressTest
   ```

2. Install Cypress:
   ```bash
   npm install cypress --save-dev
   ```
   Or specify a version:
   ```bash
   npm install cypress@<version> --save-dev
   ```

3. Run Cypress:
   ```bash
   npm run test
   ```
   Or manually open Cypress:
   ```bash
   ./node_modules/.bin/cypress open
   ```

## Post-Installation Notes
- Ensure all required Node.js modules and libraries are installed:
  ```bash
  npm install
  ```
  Or use:
  ```bash
  yarn
  ```

## Developer Notes
- Install libraries only when needed.
- Do not commit `package.json`, `package-lock.json`, or `cypress.config.js` files without prior approval.
- Always pull the latest changes from the main branch to avoid merge conflicts.
- Create a feature branch for development corresponding to the ticket or task ID.

## References
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)

---

This project is maintained by the QA team.

