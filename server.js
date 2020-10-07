const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors');
const app = express();
const request = require('request')
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.use('/api/places', function(req, res){
    // console.log(req.body)
    // let data = null;
    // request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=a&type=university&fields=name&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDjk`, { json: true }, (err, resp, body) => {
    //     if (err) { return console.log(err); }
    //     let list = body.results.slice().sort();
    //     let nonDuplicates = [];

    //     // console.log(list)
            
    //     for(let i = 0; i < list.length -1; i++){
    //         // console.log(list[i].name)
    //         if(list[i + 1].place_id !== list[i].place_id){
    //             nonDuplicates.push(list[i])
    //         }
    //     }

    //     for(let i = 0; i < nonDuplicates.length; i++){
    //         if('photos' in nonDuplicates[i]){
    //             request(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${nonDuplicates[i].photos[0].photo_reference}&maxheight=400&maxwidth=400&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDj`, {json: true}, (err, resp, body) => {
    //                 nonDuplicates[i].imageURL = body
    //                 // console.log(nonDuplicates)
    //             })
    //         }
    //     }

    function gettingPlaces(){

        return new Promise(function(resolve, reject){
            request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=a&type=university&fields=name&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDjk`, { json: true },  (err, resp, body) => {
                if (err) { return reject(err); }
                try{
                    resolve(body)
                } catch(e){
                    reject(e)
                }
            })
        })
    }

    async function places() {
        let places = await gettingPlaces().then( (val) => {
            return val
        }).catch( (err) => {
            // console.log(err)
        })
        let list = places.results.slice().sort();
        let nonDuplicates = [];
            
        for(let i = 0; i < list.length -1; i++){
            // console.log(list[i].name)
            if(list[i + 1].place_id !== list[i].place_id){
                nonDuplicates.push(list[i])
            }
        }

        for(let i = 0; i < nonDuplicates.length; i++){
            if('photos' in nonDuplicates[i]){
                request(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${nonDuplicates[i].photos[0].photo_reference}&maxheight=400&maxwidth=400&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDj`, {json: true}, (err, resp, body) => {
                    if (err) { return reject(err); }
                    nonDuplicates[i].imageURL = body
                })
            }
        }
        
        const promises = nonDuplicates.map( (item) => {
            if('photos' in item){
                request(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${nonDuplicates[i].photos[0].photo_reference}&maxheight=400&maxwidth=400&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDj`, {json: true}, (err, resp, body) => {
                        if (err) { return reject(err); }
                        try {
                            // JSON.parse() can throw an exception if not valid JSON
                            nonDuplicates[i].imageURL = body
                            resolve(nonDuplicates[i])
                        } catch(e) {
                            reject(e);
                        }
                        nonDuplicates[i].imageURL = body
                })
            }
        })
    }
    
    console.log(places())
        // res.json(nonDuplicates);
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); 

const port = process.env.PORT || 3001;
const server = app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});