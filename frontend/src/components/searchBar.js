import React from 'react'
import Select from 'react-select'
import { bedOptions, bathOptions, locationOptions, priceOptions, squareFeet, commuteTime } from '../data/constant';
import { useEffect, useState, useContext } from 'react'
import { result } from '../data/constant';
import './searchBar.css';
import fetch_filter_results from "./fetchAPI/fetchapi";
import { Context } from '../pages/searchPage';

// Search Bar component containing a number of filters that are dropdown select with options
function SearchBar() {
    const [queryResults, setQueryResults] = useState([]);
    const [json, setJson] = useState({});
    const [count, setCount] = useState([]);
    const { displayData, setDisplayData } = useContext(Context);

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
        setQueryResults(6)
        setDisplayData({});
    }

    const handleApply = () => {
        // fetch_filter_results(json, props);

        fetch_filter_results(json)
            .then(data => {
                // Do something with the data
                // filterData = data;

                setQueryResults(data);
                setCount(0);
                // console.log(data)
                // localCache(filterData)
                setDisplayData(data)
            })
            .catch(error => {
                // Handle errors
                console.error(error)
            })
    }

    const handleSort = (e) => {
        if (displayData) {
            if (e.target.innerHTML === "Sort By Price ↑") {
                const sorted = [...displayData.result].sort((a, b) => b.monthly_rent - a.monthly_rent);
                console.log(sorted);
                setDisplayData({ result: sorted });
            } else if (e.target.innerHTML === "Sort By Price ↓") {
                const sorted = [...displayData.result].sort((a, b) => a.monthly_rent - b.monthly_rent);
                console.log(sorted);
                setDisplayData({ result: sorted });
            }
        }
    }


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
                styles={{ width: "100px" }}
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
                <button className="button" onClick={handleApply}>Apply</button>
                <button className="button" onClick={handleClear}>Clear Filters</button>
                <button className="button" onClick={handleSort}>Sort By Price ↑</button>
                <button className="button" onClick={handleSort}>Sort By Price ↓</button>
            </div>
        </div>
    );
}

export default SearchBar