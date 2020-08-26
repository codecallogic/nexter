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
    request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.body.search}&type=university&fields=name&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDjk`, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        let list = body.results.slice().sort();
        var nonDuplicates = [];

            // console.log(list.length)
            
        for(let i = 0; i < list.length -1; i++){
            // console.log(list[i].name)
            if(list[i + 1].place_id !== list[i].place_id){
                nonDuplicates.push(list[i])
            }
        }

        for(let i = 0; i < nonDuplicates.length; i++){
            if('photos' in nonDuplicates[i]){
                request(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${nonDuplicates[i].photos[0].photo_reference}&maxheight=400&maxwidth=400&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDj`, {json: true}, (err, resp, body) => {
                    nonDuplicates[i].imageURL = body                        
                })
            }
        }

        // console.log(nonDuplicates)
        res.json(nonDuplicates);
    })
})

app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
const server = app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});