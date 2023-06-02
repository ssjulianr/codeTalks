// CODING PROBLEM 1 



    // What is happening in the following code snippet?  Assume the following:

            /* first.txt exists in the content folder and contains: “Hello, I am the first file”.
            second.txt exists in the content folder and contains: “Hello, I am the second file”. */

            
            const { readFileSync, writeFileSync } = require("fs"); // Importing 'readFileSync' and 'writeFileSync' functions from the 'fs' module

            const fs = require('fs')

                /* The following variables are assigned to the readFileSync function, which takes a path and encoding instructions as arguments
                readFileSync then "reads" the file located at the path and encodes it using utf-8 rules */

            const first = readFileSync('./content/first.txt', 'utf-8')
            const second = readFileSync('./content/second.txt', 'utf-8')

            console.log(first, second); 

                /* The contents of the first file (“Hello, I am the first file”), followed by the contents of the 
                second file (“Hello, I am the second file”), will be printed to the console */


                /* writeFileSync takes the path of the new file as the first argument and the data for the new file as the second argument.
                The function then creates a new file that will land at the given path containing the given data
                
                In the second function, we're also adding the flag object to the data */


            writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`) 
            writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})






// Coding Problem 2

            // Importing necessary functions for reading and writing files
            const { readFile, writeFile } = require('fs');

            // Displaying a message in the console to indicate the start of the program
            console.log('start');

            // Reading the contents of the first file
            readFile('./content/first.txt', 'utf8', (err, result) => {
            // Checking if an error occurred during file reading
            if (err) {
                // Logging the error message to the console if there's an error
                console.log('Error reading first file:', err);
                return; // Exiting the function if there's an error
            }

            // Storing the contents of the first file in a variable called 'first'
            const first = result;

            // Displaying the contents of the first file in the console
            console.log('Contents of the first file:', result);

            // Reading the contents of the second file
            readFile('./content/second.txt', 'utf8', (err, result) => {
                // Checking if an error occurred during file reading
                if (err) {
                    // Logging the error message to the console if there's an error
                    console.log('Error reading second file:', err);
                    return; // Exiting the function if there's an error
                }

                // Storing the contents of the second file in a variable called 'second'
                const second = result;

                // Displaying the contents of the second file in the console
                console.log('Contents of the second file:', result);

                // Writing the combined result of the first and second files to a new file
                writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
                    // Checking if an error occurred during file writing
                    if (err) {
                        // Logging the error message to the console if there's an error
                        console.log('Error writing to file:', err);
                        return; // Exiting the function if there's an error
                    }

                    // Displaying a message in the console to indicate successful completion of the task
                    console.log('Task completed successfully');
                });
            });
            });

    console.log('starting next task'); // Once the function is completed, 'starting next task' is displayed in the console log

// Coding Problem 3

        // Defining a function named getTodos
        const getTodos = () => {
        // Creating a new XMLHttpRequest object to make an HTTP request
        const request = new XMLHttpRequest();
    
        // Adding an event listener to handle the changes in the request's state
        request.addEventListener('readystatechange', () => {
        // Checking if the request has been completed and the response status is 200 (OK)
        if (request.readyState === 4 && request.status === 200) {
            // Logging the response text to the console
            console.log('Response from the server:', request.responseText);
        }
        // Checking if the request has been completed but the response status is not 200
        else if (request.readyState === 4) {
            // Logging an error message to the console indicating that the data could not be fetched
            console.log('Unable to fetch the data');
        }
        });
    
        // Opening a GET request to the specified URL 'https://jsonplaceholder.typicode.com/todos/'
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    
        // Sending the request to the server
        request.send();
    };
    
        // Calling the getTodos function to fetch and display the todos
        getTodos();
    
        // Calling the getTodos function again (repeating the request) to fetch and display the todos
        getTodos();
    


// Coding Problem 4
    

        // validation.js 

            // Importing the 'check' function from the 'express-validator' library

            const { check } = require('express-validator');

            // Exporting a validation middleware for user signup requests

            exports.signupValidation = [

                // Checking that the 'name' field is not empty
                check('name', 'Please provide a name.').not().isEmpty(),

                // Checking that the 'email' field is a valid email address and normalizing it by removing dots from the Gmail username (if applicable) 
                check('email', 'Please enter a valid email address.').isEmail().normalizeEmail({ gmail_remove_dots: true }),

                // Checking that the 'password' field has a minimum length of 6 characters
                check('password', 'Password should be at least 6 characters long.').isLength({ min: 6 })
            ];

            // Exporting a validation middleware for user login requests

            exports.loginValidation = [

                // Checking that the 'email' field is a valid email address and normalizing it by removing dots from the Gmail username (if applicable) 
                check('email', 'Please enter a valid email address.').isEmail().normalizeEmail({ gmail_remove_dots: true }),

                // Checking that the 'password' field has a minimum length of 6 characters
                check('password', 'Password should be at least 6 characters long.').isLength({ min: 6 })
            ];



        // server.js

            // Importing required modules and libraries
            const createError = require('http-errors');
            const express = require('express');
            const path = require('path');
            const bodyParser = require('body-parser');
            const cors = require('cors');

            // Importing validation functions from our validation.js file above
            const { signupValidation, loginValidation } = require('./validation.js');

            // Creating an instance of the Express application
            const app = express();

            // Utilizing the Express instance to handle JSON requests
            app.use(express.json());

            // Utilizing the Express instance to parse JSON data
            app.use(bodyParser.json());

            // Utilizing the Express instance to parse URL-encoded data
            app.use(bodyParser.urlencoded({ extended: true }));

            // Enabling Cross-Origin Resource Sharing
            app.use(cors());

            // Defining a route for the root URL
            app.get('/', (req, res) => {
                res.send('Node js file upload rest APIs');
            });

            // Defining a route for the '/register' URL, and applying signupValidation middleware
            app.post('/register', signupValidation, (req, res, next) => {
                // Code to handle user registration
            });

            // Defining a route for the '/login' URL, and applying loginValidation middleware
            app.post('/login', loginValidation, (req, res, next) => {
                // Code to handle user login
            });

            // Handling errors
            app.use((err, req, res, next) => {
                // Setting the error status code to 500 if not already set
                err.statusCode = err.statusCode || 500;

                // Setting the error message to "Internal Server Error" if not already set
                err.message = err.message || "Internal Server Error";

                // Sending the error status code and message as a JSON response
                res.status(err.statusCode).json({
                    message: err.message
                });
            });

            // Starting the server and listening on port 3000
            app.listen(3000, () => console.log('Server is running on port 3000'));





// Coding Problem 5 

    // Importing the 'mysql' module
    var mysql = require('mysql');

    // Creating a connection object using the 'createConnection' method from the 'mysql' module
    var connection = mysql.createConnection({
    host: 'localhost',             // Setting the host of the MySQL database
    user: 'your username',         // Setting the username to connect to the database
    password: 'your password',     // Setting the password to connect to the database
    database: 'your database name' // Setting the name of the database to be connected
    });

    // Attempting to establish a connection to the MySQL database
    connection.connect(function(error) {
    // Checking if there is an error during the connection process
    if (!!error) {
        console.log('Error:', error); // Logging the error message to the console
    } else {
        console.log('Connected! :)'); // Logging a success message to the console if the connection is successful
    }
    });

    // Exporting the 'connection' object to make it available for other parts of the application
    module.exports = connection;
