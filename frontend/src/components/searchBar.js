import React from 'react'
import Select from 'react-select'
import { bedOptions, bathOptions, locationOptions, priceOptions, squareFeet, commuteTime } from '../data/constant';
import {useEffect, useState} from 'react'
import { testValues } from '../data/constant';
import './searchBar.css';

// Search Bar component containing a number of filters that are dropdown select with options
function SearchBar(props) {
    const [json, setJson] = useState({});

    var arr = [];

    const handleChangeBed = (selected) => {
        if (selected != null) {
            setJson({ ...json, bedroom: selected.value });
        }
    };

    const handleChangeBath = (selected) => {
        if (selected != null) {
            setJson({ ...json, bathroom: selected.value });
        }
    };

    const handleChangeLocation = (selected) => {
        if (selected != null) {
            setJson({ ...json, location: selected.value });
        }
    };

    const handleChangePrice = (selected) => {
        if (selected != null) {
            setJson({ ...json, priceRange: selected.value });
        }
    };

    const handleChangeArea = (selected) => {
        if (selected != null) {
            setJson({ ...json, squareFeet: selected.value });
        }
    };

    const handleChangeCommute = (selected) => {
        if (selected != null) {
            setJson({ ...json, commuteTime: selected.value });
        }
    };

    const handleClear = () => {
        arr.forEach((a) => {
            a.clearValue();
        })
        setJson({});
    }

    const handleApply = () => {
        console.log(json);
        //console.log(process.env.REACT_APP_PUBLIC_URL)
        //props.setData(json)
    }

    // Note: change the placeholder of location to city later

    return (
        <div className="searchBar" data-testid="searchBar">
            <Select
                className="filter"
                ref={(ref) => {
                    arr = [...arr, ref]
                }}
                onChange={handleChangeBed}
                options={bedOptions}
                placeholder="Bedroom">
            </Select>
            <Select
                className="filter"
                ref={(ref) => {
                    arr = [...arr, ref]
                }}
                onChange={handleChangeBath}
                options={bathOptions}
                placeholder="Bathroom">
            </Select>
            <Select
                className="filter"
                ref={(ref) => {
                    arr = [...arr, ref]
                }}
                onChange={handleChangePrice}
                closeMenuOnSelect={true}
                options={priceOptions}
                placeholder="Price">
            </Select>
            <Select
                className="filter"
                ref={(ref) => {
                    arr = [...arr, ref]
                }}
                onChange={handleChangeLocation}
                closeMenuOnSelect={true}
                options={locationOptions}
                placeholder="Location">
            </Select>
            <Select
                className="filter"
                ref={(ref) => {
                    arr = [...arr, ref]
                }}
                onChange={handleChangeArea}
                closeMenuOnSelect={true}
                options={squareFeet}
                placeholder="Square Feet">
            </Select>
            <Select
                className="filter"
                ref={(ref) => {
                    arr = [...arr, ref]
                }}
                onChange={handleChangeCommute}
                closeMenuOnSelect={true}
                options={commuteTime}
                placeholder="Commute time">
            </Select>
            <div className="buttonSection">
                <button onClick={handleApply} className="button">Apply</button>
                <button className="button" onClick={handleClear}>Clear</button>
                <button className="button">Sort By Price ↑</button>
                <button className="button">Sort By Price ↓</button>
            </div>
        </div>
    );
}

export default SearchBar