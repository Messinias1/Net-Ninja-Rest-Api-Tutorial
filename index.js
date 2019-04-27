// require express
const express = require("express");

// set up express app
const app = express();

// handling a request(get)
app.get('/api', function(req, res) {
    console.log('GET response');
    res.send({ name: 'Yoshi'});
});

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log("now listening for requests");
})