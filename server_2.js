console.log('starting server_2.js')
console.log('In previous section, asynch(3), callback, promise, axios ');

const express = require('express');
const hbs = require('hbs');

let app = express();

//--------------------------------------------------
// "registerPartials" : 
//      to use the defined some parts without reloading.
// `${__dirname}/views/partials`: a directory to store
//      the defined some parts
// As we created the "partials" 
//      we can edit the HTML element in a place.
hbs.registerPartials(`${__dirname}/views/partials`);

/**
 * To run registerPartial(), use
 * "nodemon server_2.js -e js,hbs" in terminal
 */

// In order to write a common property 
//      for the partials above.
// The first arg is a name 
//      to be put inside of the "partial" file's tag
// The second arg is a function about the reference name.
hbs.registerHelper('currentYear', () => {

    return new Date().getFullYear();

});

// It is a way to change of properties defined 
//      in the each route.
hbs.registerHelper('makeUpperCase', (text) => {

    return text.toUpperCase();
    
});

//--------------------------------------------------
/**
 * Temploading or "template" Engine (representatively "handleBar")

    It is able to render html in a dynamical way.
    It is better than middleware "express.static()"
    It is the third party middleware engine.

    - hangleBar
     . webpage: handlebarsjs.com
     . in npm : npmjs.com/package/hbs
     . setup : npm install hbs --save
 * 
 */
// The first arg : 'view engine': what is your default view engine?
// The second arg : it is "hbs", handleBars
app.set('view engine', hbs);

/**
 * After app.set('view engine', hbs);
 *      we need to make folder for hbs.
 * Make a "views" folder.
 * Then, make ".hbs" file.
 */
//---------------------------------------------------------





//--------------------------------------------------------

// In order for "helper_2.html" serves
//      as an "express" app
//      we need "express" middleware.

// Middleware is how "express" works.
// Now we will use a built-in middleware,
//      "express.static()" in "express"
// It must not inclue "/helper_2.html" 
//      at the end of the directory. 
app.use(express.static(`${__dirname}/public`));

// ------------------------------------------------------

//1) Basic express res.send()
/*
app.get('/', (req, res) => {

    res.send({


        
        name: 'joon',
        jobs : [

            'project manager',
            'business analyst',
            'full stack programmer'
        
        ]
        

    });

});
*/


app.get('/', (req, res) => {

    // To us "hps"
    res.render('root.hbs', {


        headerMsg : 'I am learning "express"',
        title: 'Main Page',

        // Even with "hbs.registerPartials()",
        //      we do not need to change the directory.
        
        // As we use "hbs.registerHelper()",
        //      we do not need to make a separte property.
        // currentYear : new Date().getFullYear(),
        
        welcomeMsg: 'Welcome to express world!'
    
    });

});

// We will use this one 
//      for the third pary middleware engine "hbs"

app.get('/about', (req, res) => {

    // Basic "express" respond to the user 
    //      without a "static" page
    // res.send('About this page');

    // To use "hbs" which is static page renering.
    // In order to send value to the user page,
    //      use an object as the second argument.
    res.render('about.hbs', {

        headerMsg : 'I am learning "express"',
        title : 'About Page',

        // As we use "hbs.registerHelper()",
        //      we do not need to make a separte property.
        currentYear : new Date().getFullYear()
 
    });


});

app.get('/bad', (req, res) => {

    res.send({

        errorMessage: 'You reached the empty server'

    });
});

app.listen(3000, () => {

    console.log('The server is up in 3000, now!!!');

});
