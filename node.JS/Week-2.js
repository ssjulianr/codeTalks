// Problem 1

    // Example 1
    function fetchDataFromAPI() {
        // Create a new Promise that wraps the asynchronous operation
        return new Promise((resolve, reject) => {
        // Use fetch to make an API request
        fetch('https://api.example.com/data')
            .then(response => {
            if (response.ok) {
                // If the response is successful, parse the JSON data
                return response.json();
            } else {
                // If there is an error, throw a custom error
                throw new Error('Error: Unable to fetch data from API');
            }
            })
            .then(data => {
            // Resolve the Promise with the retrieved data
            resolve(data);
            })
            .catch(error => {
            // Reject the Promise with the encountered error
            reject(error);
            });
        });
    }
    
    // Usage:
    fetchDataFromAPI()
        .then(data => {
        // Handle the resolved Promise by accessing the retrieved data
        console.log(data);
        })
        .catch(error => {
        // Handle the rejected Promise by accessing the encountered error
        console.log(error);
        });

    // Example 2 
    const fs = require('fs');

    function readFile(filePath) {
    return new Promise((resolve, reject) => {
        // Use the fs.readFile method to read the file asynchronously
        fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            // If there is an error, reject the Promise with the error
            reject(error);
        } else {
            // If the file is read successfully, resolve the Promise with the file data
            resolve(data);
        }
        });
    });
    }

    // Usage:
    const filePath = 'path/to/file.txt';

    readFile(filePath)
    .then(fileData => {
        // Handle the resolved Promise by accessing the file data
        console.log(fileData);
    })
    .catch(error => {
        // Handle the rejected Promise by accessing the encountered error
        console.log(error);
    });

// Problem 2

// Nested Asynchronous Operations
asyncOperation1(function(result1) {
    // Callback hell occurs when there are multiple levels of nested callbacks within asynchronous operations
    // In this example, asyncOperation1 triggers asyncOperation2 as its callback
    asyncOperation2(result1, function(result2) {
      // asyncOperation2 triggers asyncOperation3 as its callback
      asyncOperation3(result2, function(result3) {
        // Nested callbacks can become complex and difficult to read, making the code less maintainable
        // It can be harder to manage control flow and error handling
        // Avoiding callback hell is important for code readability, maintainability, and reducing errors
      });
    });
  });
  
  
  // File System Operations
  fs.readFile('file1.txt', 'utf8', function(error, data) {
    // Check if there was an error reading the file
    if (error) {
      console.log('Error reading file:', error);
    } else {
      // If reading the file was successful, write the data to 'file2.txt'
      fs.writeFile('file2.txt', data, function(error) {
        // Check if there was an error writing the file
        if (error) {
          console.log('Error writing file:', error);
        } else {
          // If writing the file was successful, read the contents of 'file2.txt'
          fs.readFile('file2.txt', 'utf8', function(error, data) {
            // Check if there was an error reading the file
            if (error) {
              console.log('Error reading file:', error);
            } else {
              // Continue with more file operations...
            }
          });
        }
      });
    }
  });
  

// Problem 3

    // Regular Function
    let human = {
    name: 'Jeff',
    age: 19,
    introduce: function() {
      console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
  };
  person1.introduce();

  // Arrow Function
    human  = {
    name: 'Joselyn',
    age: 23,
    introduce: function() {
      console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
  };


  // The difference between the use of the this keyword in regular and arrow functions is the scope in which this is referring to 

  // In a regular function , this is bound to the function and is determined by how the function is called 

  // In an arrow function, this has no bounds and captures its value from the surrounding scope 


// Problem 4 

    const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

    // Function to filter the numbers based on the conditions
    function filterNumbers(arr) {
    // Use the filter method on the input array
    return arr.filter((num) => {
        // Check if the number is divisible by 3
        // If the remainder of the division is 0, it means the number is divisible by 3
        // Example: 9 % 3 === 0
        const divisibleBy3 = num % 3 === 0;

        // Check if the number is divisible by 6
        // If the remainder of the division is 0, it means the number is divisible by 6
        // Example: 18 % 6 === 0
        const divisibleBy6 = num % 6 === 0;

        // Check if the number is NOT divisible by 9
        // If the remainder of the division is not 0, it means the number is not divisible by 9
        // Example: 12 % 9 !== 0
        const notDivisibleBy9 = num % 9 !== 0;

        // Combine all conditions using logical operators
        // Only return true if all conditions are met
        return divisibleBy3 && divisibleBy6 && notDivisibleBy9;
    });
    }

    // Call the filterNumbers function with the numbers array as input
    const result = filterNumbers(numbers);

    // Print the resulting array
    console.log(result);


// Problem 5 

    const fs = require('fs');

    async function readFile(filePath) {
      try {
        // Use the fs.promises.readFile method to read the file
        const data = await fs.promises.readFile(filePath, 'utf8');
        return data;
      } catch (error) {
        console.log('Error reading file:', error);
      }
    }
    
    // Usage:
    async function main() {
      try {
        const filePath = 'path/to/file.txt';
        const fileData = await readFile(filePath);
        console.log(fileData);
      } catch (error) {
        console.log(error);
      }
    }
    
    main();
    

    // Async/Await is an alternative to the .then method, and simplifies our code to make it more easily readable 
    // The two functions above use async and await to read files and wait for their response, and results in cleaner code than the .then method 