/* Implement a node app called fetcher.js.

It should take two command line arguments:
a URL
a local file path.
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

There are two operations in this problem which will take an unknown amount of time:

You need to make an http request and wait for the response.
After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
When you're trying to control the order of asynchronous operations, you can use nested callbacks.*/

const request = require('request');
const fs = require('fs');

let myArgs = process.argv.slice(2);

request(myArgs[0], (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(myArgs[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${myArgs[0].length} bytes to ${myArgs[1]}`);
    //file written successfully
  });

  console.log("Writing to file");
  //console.log('body:', body); //
});

// const data = fs.readFileSync(myArgs[0], 'utf-8');
//   const len = data.length;

// console.log(`Downloaded and saved ${len} bytes to ${myArgs[1]}`);
