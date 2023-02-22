import { useState } from 'react';
import testimg from '../components/1_1.PNG';
import { Link } from 'react-router-dom';

// apartment component to show brief information
function Apartment(props) {
    const data = props.data;
    return (
        <div className="apartment">
            <Link to="/detail">
                <img className="aptImage" src={testimg} />
            </Link>
            <div className="infoSection">
                <div className="headerApt">Property Name</div>
                <div className="information">{data.location}</div>
                <div className="information">Bedroom type: {data.bedroom}</div>
                <div className="information">Bathroom type: {data.bathroom}</div>
                <div className="information">Location: {data.location}</div>
                <div className="information">Price: {data.price}</div>
                <div className="information">Square feet of apartment: {data.squareFeet}</div>
                <div className="information">Commute time to UCSD: {data.commuteTime}</div>
            </div>
        </div>
    )
};

export default Apartment;