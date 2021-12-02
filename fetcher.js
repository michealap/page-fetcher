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

const myArgs = process.argv.slice(2);
const URL = myArgs[0];
const filepath = myArgs[1];

request(URL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filepath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });

  console.log("Writing to file ...");
  console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);

});

// const data = fs.readFileSync(myArgs[0], 'utf-8');
//   const len = data.length;

// console.log(`Downloaded and saved ${len} bytes to ${myArgs[1]}`);
