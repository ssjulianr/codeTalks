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