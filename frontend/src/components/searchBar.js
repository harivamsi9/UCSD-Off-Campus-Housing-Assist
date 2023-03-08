import React from 'react'
import Select from 'react-select'
import { bedOptions, bathOptions, locationOptions, priceOptions, squareFeet, commuteTime } from '../data/constant';
import { useEffect, useState } from 'react'
import { result } from '../data/constant';
import './searchBar.css';
import fetch_filter_results from "./fetchAPI/fetchapi";

// Search Bar component containing a number of filters that are dropdown select with options
function SearchBar(props) {
    const [queryResults, setQueryResults] = useState([]);
    const [json, setJson] = useState({});
    const [count, setCount] = useState([]);

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
        setQueryResults({})
        props.setDisplayData({});
    }
    // var count = 0;
    useEffect(() => {
        console.log(queryResults)
        props.setDisplayData(queryResults);
        console.log("updated queryResults display")
      }, [count]);
    
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
                    // props.setDisplayData(data)
                })
                .catch(error => {
                    // Handle errors
                    console.error(error)
                })

        // console.log(filterData)
        // props.setDisplayData({ result })
    }

    const sortByPriceAsc = () => {
        
        // console.log(queryResults)
        const sortedResults1 = [...queryResults.result].sort((a, b) => a.monthly_rent - b.monthly_rent);
        // console.log(sortedResults1) 
        var qr1 = queryResults
        qr1.result = sortedResults1;
        // queryResults.result = sortedResults1;
        // console.log(qr1);
        setQueryResults(qr1);
        props.setDisplayData({});
        setCount(1);
        // props.setDisplayData(qr1);
    }
    const sortByPriceDsc = () => {
        // props.setDisplayData({});
        console.log(queryResults)
        const sortedResults = [...queryResults.result].sort((a, b) => b.monthly_rent - a.monthly_rent);
        console.log(sortedResults) 
        var qr = queryResults
        qr.result = sortedResults;
        queryResults.result = sortedResults;
        console.log(qr);
        setQueryResults(qr);
        props.setDisplayData({});
        setCount(2);
        // props.setDisplayData(qr);
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
                <button className="button" onClick={handleClear}>Clear Filters</button>
                <button className="button" onClick={sortByPriceDsc}>Sort By Price ↑</button>
                <button className="button" onClick={sortByPriceAsc}>Sort By Price ↓</button>
            </div>
        </div>
    );
}

export default SearchBar