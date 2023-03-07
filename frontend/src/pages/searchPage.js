import SearchBar from '../components/searchBar';
import DisplaySection from '../components/displaySection';
import './searchPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ucsdlogo from '../components/logoucsd.png'

function SearchPage(props) {
    const displayData = props.displayData;
    const setDisplayData = props.setDisplayData;
    const navigate = useNavigate();

    const apartmentsPerPage = 10;
    const [page, setPage] = useState(1);
    const totalPages = displayData.result && displayData.result.length ? Math.ceil(displayData.result.length / apartmentsPerPage) : 1;
    const startIndex = (page - 1) * apartmentsPerPage;
    const endIndex = (page) * apartmentsPerPage;

    const handleNext = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page - 1);
    }

    const handleURL = () => {
        navigate("/detail");
    }

    return (
        <div className="searchPage">
            <header>
                <img className="ucsd_icon" src={ucsdlogo} alt="Image not exist" width="80" />
                <h2 className="logo">UCSD HOUSE FINDER</h2>
                <nav className="navigation">
                    <p>Happy Finding House!</p>
                </nav>
            </header>

            {displayData ?
                <div className="navBar">
                    <button className="button" onClick={handlePrev} disabled={page === 1}>Prev</button>
                    <p>Page {page} of {totalPages}</p>
                    <button className="button" onClick={handleNext} disabled={page === totalPages}>Next</button>
                </div> : <></>
            }
            <div className="contentPage">

                {/* <div>
            <h1>UCSD House Finder</h1>
            <h2>Use the left side filter section to choose your expectation of apartments</h2>
            <div className="searchSection">
                {displayData ?
                    <div className="navBar">
                        <button className="button" onClick={handlePrev} disabled={page === 1}>Prev</button>
                        <p>Page {page} of {totalPages}</p>
                        <button className="button" onClick={handleNext} disabled={page === totalPages}>Next</button>
                    </div> : <></>} */}

                <SearchBar setDisplayData={setDisplayData} />
                <DisplaySection displayData={displayData} startIndex={startIndex} endIndex={endIndex} />
            </div>
        </div>
    );
}

export default SearchPage;