var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=fd3150a661c1ddc90d3aefdec0400de4&units=imperial";

module.exports = {
    getTemp: function(location) {

        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        // The return is here because a promise needs to be returned from this function, so that you can chain a .then() after
        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(err) {
            throw new Error(err.data.message);
        });
    }
}