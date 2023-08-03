# MERN Stack User Authentication Application

## Overview

This project is a MERN stack application (MongoDB, Express, React, Node.js) that provides a secure user authentication system. The user authentication process uses a token-based method through JSON Web Tokens (JWTs), an open standard (RFC 7519) that defines a compact and secure way for transmitting information between parties as a JSON object. This application also utilizes password hashing for an added layer of security.

## Stack and Key Dependencies

- MongoDB (database)
- Express (web server framework)
- React (front-end framework)
- Node.js (back-end runtime environment)
- bcryptjs (password hashing)
- cookie-parser (parses cookie header and populates `req.cookies` with an object keyed by the cookie names)
- cors (enables cross-origin resource sharing)
- dotenv (loads environment variables from a .env file into `process.env`)
- axios (Promise based HTTP client for the browser and Node.js)
- react-cookie (universal cookies for React)
- react-router-dom (DOM bindings for React Router)
- react-toastify (allows you to add notifications to your app with ease)

## Project Structure

The server-side code is located in the `server/` directory, and the client-side code is located in the `client/` directory. The server connects to a MongoDB database, listens on a specific port (default is 5000), and sets up middleware for CORS, cookie parsing, and JSON data.

The `AuthRoute` module handles the `/login`, `/signup`, and `/logout` routes.

On the client side, `Home.jsx` is the main component that checks if the user is authenticated. If not, it redirects to the `/login` page. The `Login.jsx` and `Signup.jsx` components handle user login and signup respectively.

## How to Run

1. Clone the repository.
2. Run `npm install` in both the root directory and the client directory to install necessary dependencies.
3. Ensure MongoDB is installed and running.
4. Create a `.env` file in the root directory and set your environment variables (e.g., `DB_CONNECT`, the URL for your MongoDB database).
5. Start the server with `npm start` in the root directory.
6. In another terminal, navigate to the `client/` directory and start the React application with `npm start`.
