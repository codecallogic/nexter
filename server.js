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
    // console.log(req.body)
    let data = null;
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=a&type=university&fields=name&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDjk`, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        let list = body.results.slice().sort();
        let nonDuplicates = [];

            // console.log(list)
            
        for(let i = 0; i < list.length -1; i++){
            // console.log(list[i].name)
            if(list[i + 1].place_id !== list[i].place_id){
                nonDuplicates.push(list[i])
            }
        }

        function doSomething() {
            for(let i = 0; i < nonDuplicates.length; i++){
                if('photos' in nonDuplicates[i]){
                    request(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${nonDuplicates[i].photos[0].photo_reference}&maxheight=400&maxwidth=400&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDj`, {json: true}, (err, resp, body) => {
                        // console.log(nonDuplicates[i].imageURL)                       
                        nonDuplicates[i].imageURL = body
                        // console.log(nonDuplicates[i].imageURL) 
                        // console.log(nonDuplicates)                      
                    })
                }
            }
        }

        function successCallBack() {
            console.log(nonDuplicates)
        }

        function failureCallBack(err) {
            console.log(`error: ${err}`)
        }

        async function run() {
            try {
                const result = await doSomething();
                console.log(result)
            } catch(err) {
                failureCallBack(err)
            }
        }

        new Promise((resolve, reject) => {
            console.log('Initial');
            for(let i = 0; i < nonDuplicates.length; i++){
                if('photos' in nonDuplicates[i]){
                    request(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${nonDuplicates[i].photos[0].photo_reference}&maxheight=400&maxwidth=400&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDj`, {json: true}, (err, resp, body) => {
                        // console.log(nonDuplicates[i].imageURL)                       
                        nonDuplicates[i].imageURL = body
                        // console.log(nonDuplicates[i].imageURL) 
                        console.log(nonDuplicates)                      
                    })
                }
            }
            // console.log(nonDuplicates)
            resolve();
        })
        .then(() => {
            
            // console.log(nonDuplicates)
            console.log('Do this');
        })
        .catch(() => {
            console.error('Do that');
        })
        .then(() => {
            // console.log(nonDuplicates)
            console.log('Do this, no matter what happened before');
        });
        
        // res.json(nonDuplicates);
    })
})

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
const server = app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});