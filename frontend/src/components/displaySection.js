import { useState } from 'react';
import Apartment from './apartment';
import './displaySection.css'


// display section component that shows brief apartment information
// Note: each page shows 10 apartments, need to design a nav bar
// Problem: 1) nav bar(for the next sprint) 2) design a detail page, but may not be connected with search page(next sprint)
function DisplaySection(props) {
    const data = props.displayData.result;
    const apartmentsPerPage = 10;
    const [page, setPage] = useState(1);
    const totalPages = data ? Math.ceil(data.length / apartmentsPerPage) : 1;
    const startIndex = (page - 1) * apartmentsPerPage;
    const endIndex = (page) * apartmentsPerPage;

    const handleNext = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page - 1);
    }

    const handleTest = () => {
        console.log(data);
    }

    return (
        <div className="displayBlock">
            {data ?
                <div className="navBar">
                    <button className="button" onClick={handlePrev} disabled={page === 1}>Prev</button>
                    <p>Page {page} of {totalPages}</p>
                    <button className="button" onClick={handleNext} disabled={page === totalPages}>Next</button>
                </div> : <></>}
            <div className="displaySection">
                {data ? data.slice(startIndex, endIndex).map((val, index) => {
                    return (<Apartment data={val} key={index} />)
                }) : <></>}
            </div>
            <button onClick={handleTest} >test</button>
        </div>
    )
}

export default DisplaySection;