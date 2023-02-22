import { useState } from 'react';
import { testValues } from '../data/constant';
import Apartment from './apartment';
import NavBar from './navBar';
import './displaySection.css'


// display section component that shows brief apartment information
// Note: each page shows 10 apartments, need to design a nav bar
// Problem: 1) nav bar(for the next sprint) 2) design a detail page, but may not be connected with search page(next sprint)
function DisplaySection() {
    return (
        <div className="displayBlock">
            {testValues.length > 0 && testValues.map((val, index) => {
                return (<Apartment data={val} key={index} />)
            })}
        </div>
    )
}

export default DisplaySection;