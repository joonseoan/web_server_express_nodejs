console.log('starting server_1.js')
console.log('In previous section, asynch(3), callback, promise, axios ');

// In order to run the express server
const express = require('express');

// To make an express app,
//      call express() function
//      making a ton of "express configuration"
let app = express();

// To configure http route handler.
// Thd down below is for "http" app request

// If the server (my server) listens to something 
//      in the URL ('/') down below,
//      the server does a specified function
//      and sends back some result to the user
//      who made the request.
// In detail,
//      the first argument of get() for the URL of the app
//      and the second argument is a function to run,
//          with telling the express
//          what to send back to the user 
//          who made the "http" request. 

// The first argument of a function (req, res) is request.
// The request is about info like "header", "body", "method" ,and etc.
//      specified in the front.
// The second argument is about my response from the request.
// [FYI] By convention, '\' route is called "forward route".
app.get('/', (req, res) => {

    // It is my response for the http request.
    // res.send('Hello Express');

    // We can put HTML tag in the sendding action.
    // Then, we can get "Content-Type:text/html; charset=utf-8" info
    // res.send('<h1>Hello Express</h1>');

    // We can send the object to the user.
    // It can be an api data in JSON type.
    // The result of "content-type in Chrome"
    //      "Content-Type:application/json; charset=utf-8" 

    // ****** The objec is switched into "JSON" type
    //      without "JSON.stryingfy()"
    res.send({


        name: 'joon',
        jobs : [

            'project manager',
            'business analyst',
            'full stack programmer'
        
        ]

    });

});

// Adding directory and setting up the new function 
//      to respond to user's request.

app.get('/about', (req, res) => {

    res.send('About this page');

});

app.get('/bad', (req, res) => {

    res.send({

       // error_code: 404,
        errorMessage: 'You reached the empty server'

    });
});

//"3000" is a port to listen to the request.
app.listen(3000);

/**
 * [General]
 * Request URL:http://localhost:3000/
    Request Method:GET
    Status Code:304 Not Modified
    Remote Address:[::1]:3000
    Referrer Policy:no-referrer-when-downgrade
 * 
 * [Response Header]
 * HTTP/1.1 304 Not Modified
    X-Powered-By: Express
    ETag: W/"d-oPRzYb9qK1AQJa1lUfQSoZqXcws"
    Date: Mon, 05 Mar 2018 23:59:13 GMT
    Connection: keep-alive

    [Request Header]
    Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,**;q=0.8
    Accept-Encoding:gzip, deflate, br
    Accept-Language:en-US,en;q=0.9,ko-KR;q=0.8,ko;q=0.7
    Cache-Control:max-age=0
    Connection:keep-alive
    DNT:1
    Host:localhost:3000
    If-None-Match:W/"d-oPRzYb9qK1AQJa1lUfQSoZqXcws"
    Upgrade-Insecure-Requests:1
    User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36
    localhost	
 
 */