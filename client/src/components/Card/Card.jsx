import React from 'react';
import detail from './details';
import './Card.css';

const Card = () => {
    return (

        detail.map((details, index) => {
            return (
                <div className="column" key={index}>
                    <div className="card carousel-card">
                        {details.imgURL !== null ?
                            <div className="carousel-card-img-wrapper">
                                <img
                                    className={details.classDec}
                                    style={{ width: `${details.imgWidth}`, maxWidth: "100%", height: "auto" }}
                                    src={details.imgURL}
                                    alt={details.placeholder} />
                            </div>
                            : <div className="carousel-card-img-wrapper"><i className={`${details.classDec}`}></i></div>
                        }

                        <div className="card-header p-3 mb-2">
                            {details.title}
                        </div>
                        <div className="card-body carousel-card">
                            <p class="card-text">{details.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default Card;