import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleButtonClick = () => {
        setToggle((prevState) => {
            return !prevState
        });

        axios.get("/weather")
            .then(response => {
                console.log(response.data);
                setWeather(
                    response.data.temp
                )
            });
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Get weather in Melbourne</button>
            {toggle ? <h1> The weather in Melbourne is {weather} degrees celsius</h1> : null}
        </div>
    )
}

export default Weather;