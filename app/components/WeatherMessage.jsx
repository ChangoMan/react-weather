var React = require('react');

var WeatherMessage = ({temp, location}) => {
    // This can actually be "destructured" in the () above, instead of passing in (props)
    // var {temp, location} = props;
    return (
        <div>
            <p>It's {temp} in {location}</p>
        </div>
    );
}

module.exports = WeatherMessage;