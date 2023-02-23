import SearchBar from '../components/searchBar';
import DisplaySection from '../components/displaySection';
import './searchPage.css';
import { useNavigate } from 'react-router-dom';

function SearchPage(props) {
    const displayData = props.displayData;
    const navigate = useNavigate();

    const handleURL = () => {
        navigate("/detail");
    }

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