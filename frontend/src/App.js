import './App.css';
import React, { useEffect, useState } from "react";
import SearchBar from './components/searchBar';
import SearchPage from './pages/searchPage';
import DetailPage from './pages/detailPage';
import { Route, Router, Routes, Link } from 'react-router-dom'

function App() {
  // state that let search bar set data
  const [displayData, setDisplayData] = useState({});
  // initial search page should be replaced with login page
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router> */}

      {/* <DetailPage displayData={displayData} /> */}
      <SearchPage displayData={displayData} setDisplayData={setDisplayData} />
    </div>
  );
}

export default App;
