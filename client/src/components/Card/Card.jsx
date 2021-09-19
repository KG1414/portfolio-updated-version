import React from 'react';
import detail from './details';
import './Card.css';

const Card = () => {
    return (

        detail.map((details) => {
            return (
                <div className="column">
                    <div className="card h-100">
                        {details.imgURL !== null ?
                            <div className="img-wrapper">
                                <img
                                    className={details.classDec}
                                    style={{ width: `${details.imgWidth}`, maxWidth: "100%", height: "auto" }}
                                    key={details.key}
                                    src={details.imgURL}
                                    alt={details.placeholder} />
                            </div>
                            : <div className="img-wrapper"><i className={`${details.classDec}`}></i></div>
                        }

                        <div className="card-header p-3 mb-2">
                            {details.title}
                        </div>
                        <div className="card-body">
                            <p class="card-text">{details.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default Card;