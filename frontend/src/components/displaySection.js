import { useState } from 'react';
import Apartment from './apartment';
import './displaySection.css'
import { useLocation } from 'react-router-dom';


// display section component that shows brief apartment information
// Note: each page shows 10 apartments, need to design a nav bar
// Problem: 1) nav bar(for the next sprint) 2) design a detail page, but may not be connected with search page(next sprint)
function DisplaySection(props) {
    const data = props.displayData.result;
    const startIndex = props.startIndex;
    const endIndex = props.endIndex;

    return (
        <div className="displayBlock">
            <div className="displaySection">
                {data && data.length > 0 ? data.slice(startIndex, endIndex).map((val, index) => {
                    return (<Apartment data={val} key={index} />)
                }) : <p className="notFound">No Results Found</p>}
            </div>
        </div>
    )
}

export default DisplaySection;