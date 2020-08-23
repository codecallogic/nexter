const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
const https = require('https')
const request = require('request')
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.use('/api/places', function (req, res){
    let data = null;
    request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=valley&type=university&fields=name&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDjk', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }        
        res.json(body);
    })
})

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
const server = app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});