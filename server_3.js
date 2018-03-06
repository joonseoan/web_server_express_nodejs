console.log('starting server_3.js')
console.log('In previous section, asynch(3), callback, promise, axios ');
console.log('I have to review the first seeion of nodejs');

const express = require('express');
const hbs = require('hbs');
// I forgot "fs"
const fs = require('fs');

// Since Heroku installed, we need to change environment
//      the server is working on.
// "process" is an object 
//      that contains all of environment variable
//      as key value pairs.
const port = process.env.PORT || 3000;


let app = express();

hbs.registerPartials(`${__dirname}/views/partials`);

hbs.registerHelper('currentYear', () => {

    return new Date().getFullYear();

});

hbs.registerHelper('makeUpperCase', (text) => {

    return text.toUpperCase();
    
});


app.set('view engine', hbs);

//------------Basic Middleware-----------------------------------------

// "helper.html" here is still accessible
//      because it is upperside of "app.use()" blocker
app.use(express.static(`${__dirname}/public`));

// How to work about middleware.
// It takes a function.
// "next" arg defines when the function is done.
//
app.use((req, res, next) => {

    // "toString()" creates "human" readable time stamp.
    // So when "now" is done, 
    //      we can take the next step with "next()" 
    let now = new Date().toString();

    // "next()" notifies this app.use() is done,
    //      and then, makes (or call) the handlers 
    //      (to) fire/start their actions. 
    // Without "next()", reloading each page is never
    //      going to be over.
    

    //-----------Request from the client-------------------------------

    // FYI, the contents about api is in expressjs.com
    // Then find "API reference" -> "4.x" tag on the top.
    // And, "request and respose" in the right side.

    // First, we are going to use "get.method"
    // "req.method": is about GET/POST/PUT
    // "req.url" is 
    //      about the requesting URL or path from the user??
    // 1)
    // console.log(`${now}: ${req.method} ${req.url}`);

    // With "fs"
    // 2)
    const log = `${now}: ${req.method} ${req.url}`;

    fs.appendFile('server.log', log +'\n', (err) => {

        if(err)
        console.log('some error occurr.');

    });
    
    console.log(log);

    next();

});

// Since this block, next() is not going to run
// Even with "next()", it does not gothrough this block.
// FYI, however, "app.use(express.static(`${__dirname}/public`))"
//      still accessible because it is not 
//      in a scope "static views"
// The way to block this middleware is taking out the middleware
//      then put it in down below of this block code.

/*
app.use((req, res, next) => {

    res.render('maintenance.hbs');
    //next();

});

*/

// app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {

    res.render('root.hbs', {


        headerMsg : 'I am learning "express"',
        title: 'Main Page',        
        welcomeMsg: 'Welcome to express world!'
    
    });

});

app.get('/about', (req, res) => {

    res.render('about.hbs', {

        headerMsg : 'I am learning "express"',
        title : 'About Page'
 
    });

});


app.get('/', (req, res) => {

    res.render('root.hbs', {


        headerMsg : 'I am learning "express"',
        title: 'Main Page',        
        welcomeMsg: 'Welcome to express world!'
    
    });

});

app.get('/about', (req, res) => {

    res.render('about.hbs', {

        headerMsg : 'I am learning "express"',
        title : 'About Page'
 
    });

});

app.get('/bad', (req, res) => {

    res.send({

        errorMessage: 'You reached the empty server'

    });
});


// since injecting "heroku" and setup "process.env.Port"
//      we need to change the port configuration in the code.
app.listen(port, () => {

    console.log(`The server is up in ${ port } , now!!!`);

});

/**
 * Since we install heroku,
 *  1) change the port configuration code
 *  
 *  2) add "start" : "node server_3.js" to "package.json" 
 *      right underneath "scripts.test" property.
 *  
 *  3) the, heroku will identify the "start" file in the app.
 * 
 *  4) Then, finally we can use "npm start" in our app.
 */
