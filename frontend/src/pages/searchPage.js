import SearchBar from '../components/searchBar';
import DisplaySection from '../components/displaySection';
import './searchPage.css'

function SearchPage(props) {
    const displayData = props.displayData;
    return (
        <div className="searchPage">
            <div>
                <SearchBar className="searchBar" />
            </div>
            <div>
                <DisplaySection />
            </div>
        </div>
    );
}

export default SearchPage;