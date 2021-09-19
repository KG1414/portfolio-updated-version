import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [weather, setWeather] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleButtonClick = () => {
        setToggle((prevState) => {
            return !prevState
        });

        axios.get("/weather")
            .then((response, err) => {
                console.log(response.data + " or " + err);
                setWeather(
                    response.data.temp
                )
            });
    };

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button onClick={handleButtonClick} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <span className="weather">Click here for weather in Melbourne.</span>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {toggle ? <p>The weather in Melbourne is {weather} degrees celsius</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Weather;