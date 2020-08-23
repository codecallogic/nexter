export default {
    places,        
}

function places(){
    return fetch('/api/places', {
        method: 'GET'
    }).then( res => {
        if(res.ok) return res.json()
        throw new Error('Bad request')
    }).then( data => data)
    .catch( error => {
        console.log(error)
    })
}


function test(){
    return fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=valley&type=university&fields=name&key=AIzaSyCNueaszuZLnAD0t1ElCg9NUk8EZ8NhDjk', {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',     
        })
    }).then( res => {
        if (res.ok) return res.json()
        throw new Error('Bad request');
    }).then( data => data)
    .catch( error => {
        console.log(error)
    })
}
