/*  REST API (representational state transfer)
        - relies on a stateless, client-server protocol, almost always HTTP

    Authentication
        - password authentication is the most common way to authenticate users (username / email + password)
        - token-based authentication is a more modern approach (JSON Web Tokens)
            - JWTs are an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object
            - this information can be verified and trusted because it is digitally signed
            - the token is verified and compared to a database where the user information is stored

    Stack (MERN)
        - MongoDB (database)
        - Express (web framework)
        - React (front-end framework)
        - Node.js (back-end runtime environment)

    Dependencies
        - bcryptjs: password hashing function
        - cookie- parser: middleware that extracts info required for authentication 
        - cors: middleware that enables cross-origin resource sharing
        - dotenv: loads environment variables from a .env file into process.env
*/

const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 5000;

const cors = require("cors");

const app = express();

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.cyan.bold);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
