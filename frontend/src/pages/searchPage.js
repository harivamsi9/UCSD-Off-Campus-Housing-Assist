import SearchBar from '../components/searchBar';
import DisplaySection from '../components/displaySection';
import './searchPage.css';
import { useNavigate } from 'react-router-dom';
import ucsdlogo from '../components/logoucsd.png'

function SearchPage(props) {
    const displayData = props.displayData;
    const setDisplayData = props.setDisplayData;
    const navigate = useNavigate();

    const handleURL = () => {
        navigate("/detail");
    }

    return (
        <div className="searchPage">
            <header>
                <img className="ucsd_icon" src={ucsdlogo} alt="Image not exist" width="80"/>
                <h2 className="logo">UCSD HOUSE FINDER</h2>
                <nav className="navigation">
                    <p>Happy Finding House!</p>
                </nav>
            </header>
            <div className="contentPage">
                <SearchBar setDisplayData={setDisplayData} />
                <DisplaySection displayData={displayData} />
            </div>

        </div>
    );
}

export default SearchPage;