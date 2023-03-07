import { useState } from 'react';
import testimg from './1_1.PNG';
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";

// apartment component to show brief information
function Apartment(props) {
    const data = props.data;
    const sampleImage = props.data.images[0]

    return (
        <div className="apartment">
            <img className="aptImage" src={process.env.PUBLIC_URL + data.images[0]} alt="Image not exist" />
            <div className="infoSection">
                <div className="headerApt">Property Name</div>
                <div className="information">Address: {data.address}</div>
                <div className="information">Bedroom type: {data.bedrooms}</div>
                <div className="information">Bathroom type: {data.bathrooms}</div>
                <div className="information">Location: {data.location}</div>
                <div className="information">Price: {data.monthly_rent}</div>
                <div className="information">Square feet of apartment: {data.sqft}</div>
                <div className="information">Commute time to UCSD: {data.commute_time_to_ucsd}</div>
            </div>
            <Link to="/detail" className="detailLink">
                Details
            </Link>
        </div>
    )
};

export default Apartment;