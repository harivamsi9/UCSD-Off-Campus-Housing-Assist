import './App.css';
import SearchBar from './components/searchBar';
import { useState } from 'react'
import SearchPage from './pages/searchPage';
import DetailPage from './pages/detailPage';
import { Route, Router, Routes, Link } from 'react-router-dom'

function App() {
  // state that let search bar set data
  const [displayData, setDisplayData] = useState({});
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/detail" component={DetailPage} />
        </Routes>
      </Router> */}
      <SearchPage displayData={displayData} />
    </div>
  );
}

export default App;
