
export const blogData = [
  {
    id: 1,
    title: "Popular JavaScript Array Methods",
    slug:"popular-javaScript-array-methods",
    img: "https://www.positronx.io/wp-content/uploads/2018/10/positronx-javascript-00001.jpg",
   category: "Web Development",
    date: { date: "23", month: "Mar" },
    description:"JavaScript provides a wide range of methods that can be used to manipulate and work with arrays. Here are some commonly used array methods in JavaScript",
      details: [
      {
        example: "Array.prototype.map()",
        description: "This method creates a new array with the results of calling a provided function on every element in the calling array. It does not modify the original array.",
        code:
        `const numbers = [1, 2, 3, 4, 5];
         const doubled = numbers.map(num => num * 2);
         console.log(doubled); // [2, 4, 6, 8, 10]`
      },
      {
        example: "Array.prototype.filter()",
        "description": "This method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.",
        code:
        `const numbers = [1, 2, 3, 4, 5];
         const odd = numbers.filter(num => num % 2 !== 0);
         console.log(odd); // [1, 3, 5]`
      },
      {
        example: "Array.prototype.reduce()",
        description: "This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It does not modify the original array.",
        code:
        `const numbers = [1, 2, 3, 4, 5];
         const sum = numbers.reduce((acc, cur) => acc + cur, 0);
         console.log(sum); // 15`
      },
      {
        example: "Array.prototype.forEach()",
        description: "It calls a provided function once for each element in the array.",
        code:
        `const numbers = [1, 2, 3, 4, 5];
         const sum = numbers.reduce((acc, cur) => acc + cur, 0);
         console.log(sum); // 15`
      },
      {
        example: "Array.prototype.sort()",
        description: "It sorts the elements of an array in place.",
        code:
        `const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
         numbers.sort();
         console.log(numbers); // [1, 1, 2, 3, 4, 5, 5, 6, 9]`
      }
    ],
    
  },
  {
    id: 2,
    title: "5 String Functrions For Javascript",
    slug:"5-string-functrions-for-javascript",
    img: "https://www.cronj.com/blog/wp-content/uploads/JavaScript-Strings.png",
   category: "Web Development",
    date: { date: "23", month: "Mar" },
    description:"Strings are used in JavaScript to represent and manipulate a group of characters. Both the primitive data type and an object can be represented by a string. JavaScript automatically transforms raw strings into String objects so that even primitive strings can access and use String methods.",
    details: [
      {
        example: "1. charAt():",
        description: "This function returns the character at a specified index in a string.",
        code: `let str = "Hello";
        console.log(str.charAt(1)); // Output: "e"`
        
      },
      {
        example: "2. concat()",
        description: "This function concatenates two or more strings and returns the result.",
        code:
        `let str1 = "Hello";
        let str2 = "World";
        console.log(str1.concat(" ", str2)); // Output: "Hello World"`
      },
      {
        example: "3. indexOf()",
        description: "This function returns the index of the first occurrence of a specified substring in a string.",
        code:
        `let str = "Hello World";
        console.log(str.indexOf("o")); // Output: 4`
      },
      {
        example: "4. toUpperCase()",
        description: "This function returns a string with all the characters in uppercase.",
        code:
        `let str = "Hello World";
        console.log(str.toUpperCase()); // Output: "HELLO WORLD"`
      },
      {
        example: "5. slice()",
        description: "This function extracts a section of a string and returns a new string.",
        code:
        `let str = "Hello World";
        console.log(str.slice(0, 5)); // Output: "Hello"
        `
      }
    ],
    
  },
  {
    id: 3,
    title: "5 MySQL function ",
    slug:"5-mysql-functrion",
    img: "https://i0.wp.com/ubiq.co/database-blog/wp-content/uploads/2020/10/enable-mysql-replication.png?resize=730%2C410&ssl=1",
   category: "Web Development",
    date: { date: "23", month: "Mar" },
    description:"More than merely storing and retrieving data is possible with MySQL. Before retrieving or saving the data, we can also manipulate it. MySQL Functions can help with it. Simply put, functions are segments of code that carry out certain tasks and then produce an outcome. Other functions do not accept parameters, whereas some functions do.",
    details: [
      {
        example: "1. CONCAT():",
        description: "This function concatenates two or more strings and returns the result",
        code:
        `SELECT CONCAT('Hello', ' ', 'World'); -- Output: 'Hello World'`
      },
      {
        example: "2. SUBSTRING():",
        description: "This function extracts a substring from a string.",
        code:
        `SELECT SUBSTRING('Hello World', 1, 5); -- Output: 'Hello'`
      },
      {
        example: "3. LOWER():",
        description: "This function returns a string with all characters in lowercase.",
        code:
        `SELECT LOWER('Hello World'); -- Output: 'hello world'`
      },
      {
        example: "4. UPPER():",
        description: " This function returns a string with all characters in uppercase.",
        code:
        `SELECT UPPER('Hello World'); -- Output: 'HELLO WORLD'`
      },
      {
        example: "5. DATE_FORMAT():",
        description: [ "This function formats a date according to a specified format.",

        "Note: The NOW() function returns the current date and time in MySQL. The format '%Y-%m-%d %H:%i:%s' is used to format the date as YYYY-MM-DD HH:MM:SS"
      ],
        code:
        `SELECT DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s'); -- Output: '2023-03-23 12:34:56'`
      }
    ]
  },
]
  