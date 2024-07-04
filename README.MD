# 09 - Stripe Payment API

Taken from John Smilga - Node Course - Section 13 - Stripe Payment API

## Description

Backend app providing stripe payment functionality

## Tech stack

### backend

- node
- express
- mongoose
- mongoDB
- nodemon
- stripe v8
- jsonwebtoken
- joi

- express-async-errors
- express-rate-limit
- dotenv
- helmet
- http-status-codes
- rate-limiter
- xss-clean

## Usage

- copy repo files to local directory
- npm install
- configure .env file with PORT, MONGO_URI

* PORT is the port the backend API server will run on
* MONGO_URI is the mongoDB database connection string (ensure to include the database name, username and password)

- npm run dev
- connect with localhost:3000

## Configuration

### Stripe Server

- in the .env file configure the STRIPE_SECRET_API_KEY, by navigating to the stripe dashboard > settings > developers > API Keys

### Stripe Client

- in browser-app.js configure the stripe public api key
