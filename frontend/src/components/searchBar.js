import Select from 'react-select'
import { bedOptions, bathOptions, locationOptions, priceOptions, squareFeet, commuteTime } from '../data/constant';
import { useState } from 'react'
import { testValues } from '../data/constant';
import './searchBar.css';


function SearchBar() {
    const [json, setJson] = useState({});

    const handleChangeBed = (selected) => {
        setJson({ ...json, bedroom: selected.value })
    };

    const handleChangeBath = (selected) => {
        setJson({ ...json, bathroom: selected.value })
    };

    const handleChangeLocation = (selected) => {
        setJson({ ...json, location: selected.value })
    };

    const handleChangePrice = (selected) => {
        setJson({ ...json, priceRange: selected.value })
    };

    const handleChangeArea = (selected) => {
        setJson({ ...json, squareFeet: selected.value })
    };

    const handleChangeCommute = (selected) => {
        setJson({ ...json, commuteTime: selected.value })
    };

    const handleApply = () => {
        console.log(json)
    }


    return (
        <div className="searchBar" data-testid="searchBar">
            <Select
                className="filter"
                onChange={handleChangeBed}
                closeMenuOnSelect={true}
                options={bedOptions}
                placeholder="Bedroom">
            </Select>
            <Select
                className="filter"
                onChange={handleChangeBath}
                closeMenuOnSelect={true}
                options={bathOptions}
                placeholder="Bathroom">
            </Select>
            <Select
                className="filter"
                onChange={handleChangePrice}
                closeMenuOnSelect={true}
                options={priceOptions}
                placeholder="Price">
            </Select>
            <Select
                className="filter"
                onChange={handleChangeLocation}
                closeMenuOnSelect={true}
                options={locationOptions}
                placeholder="Location">
            </Select>
            <Select
                className="filter"
                onChange={handleChangeArea}
                closeMenuOnSelect={true}
                options={squareFeet}
                placeholder="Square Feet">
            </Select>
            <Select
                className="filter"
                onChange={handleChangeCommute}
                closeMenuOnSelect={true}
                options={commuteTime}
                placeholder="Commute time">
            </Select>
            <button onClick={handleApply} className="Button">Apply</button>
            <button className="Button">Sort By Price ↑</button>
            <button className="Button">Sort By Price ↓</button>
        </div>
    );
}

export default SearchBar