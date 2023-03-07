import SearchBar from '../components/searchBar';
import DisplaySection from '../components/displaySection';
import './searchPage.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

function SearchPage(props) {
    const displayData = props.displayData;
    const setDisplayData = props.setDisplayData;
    const navigate = useNavigate();

    const handleURL = () => {
        navigate("/detail");
    }

    return (
        <div className="searchPage">
            <SearchBar setDisplayData={setDisplayData} />
            <DisplaySection displayData={displayData} />
        </div>
    );
}

export default SearchPage;