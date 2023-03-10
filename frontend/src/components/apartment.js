import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// apartment component to show brief information
function Apartment(props) {
    const data = props.data;

    return (
        <div className="apartment">
            <img className="aptImage" src={process.env.PUBLIC_URL + "/images/" + data.images[0]} alt="Image not exist" />
            <div className="infoSection">
                <div className="information">Address: {data.address}</div>
                <div className="information">Bedroom type: {data.bedrooms}</div>
                <div className="information">Bathroom type: {data.bathrooms}</div>
                <div className="information">Location: {data.location}</div>
                <div className="information">Price: {data.monthly_rent}</div>
                <div className="information">Square feet of apartment: {data.sqft}</div>
                <div className="information">Commute time to UCSD: {data.commute_time_to_ucsd} minutes</div>
            </div>
            <Link to="/detail" className="detailLink" state={{ data: data }}>
                Details
            </Link>
        </div>
    )
};

export default Apartment;