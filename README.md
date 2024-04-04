# ExpenseSync

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Description
ExpenseSync is a web application designed to track individual expenses and facilitate group expense sharing. Built with NestJS, it provides a robust backend framework for managing user authentication, expense tracking, and group management.

For frontend of this application, please visit the link [here](https://github.com/ujjwal-bh/expense-sync-ui)


## Prerequisites
Make sure you have the following installed on your system

- NodeJS
- NestJS
- Docker


## Installation

To install NestExpenses, follow these steps:

1. Clone the repository:

        $ git clone https://github.com/ujjwal-bh/expense-sync-api.git

2. Navigate to the project directory:

        $ cd expense-sync-api

3. Install dependencies:

        $ npm install

4. Run docker compose file

        $ docker-compose up

5. Set up environment variables:
    <!-- % will be added as the development progresses -->
        .env file
                - DATABASE_URL="mysql://username:password@localhost:3306/dbname?schema=public"
                - PORT
                - JWTSECRET
                - JWTREFRESHSECRET
                - TOKENEXPIRYSTR "example: '2h'"
                - REFRESHTOKENEXPIRYSTR "example: '7d'"



#

 To start the application in development mode, run the following command:

    $ npm run start:dev

This will start the server and make the application accessible at `http://localhost:8000`.

## Contributing

We welcome contributions from the community! If you'd like to contribute to NestExpenses, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

git checkout -b feature-name


3. Make your changes and commit them:

git commit -m "Your commit message"

4. Push your changes to your fork:

git push origin feature-name

5. Open a pull request against the `main` branch of the original repository.

Please ensure your code follows the project's coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).
