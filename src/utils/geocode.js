const request = require('request')

const geocode = (address, callback) => {
    console.log('adress'+address);
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2h1cnJpY2FuZSIsImEiOiJja3F0bDh1NzIxd2MwMnVwNXo2a2pscHAxIn0.Eu6dPOTJO8O-KVaLMTjN8A&limit=1'
    request({ url, json: true }, (error, { body }) => {
        console.log('body'+body.features.length===0);
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode