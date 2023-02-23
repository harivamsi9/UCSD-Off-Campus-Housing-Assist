import './App.css';
import React, { useEffect, useState } from "react";
import SearchBar from './components/searchBar';
import { useState } from 'react'
import SearchPage from './pages/searchPage';
import DetailPage from './pages/detailPage';
import { Route, Router, Routes, Link } from 'react-router-dom'

function App() {
  // state that let search bar set data
  const [displayData, setDisplayData] = useState({});
  // initial search page should be replaced with login page
  return (
    <div className="App">
<<<<<<< HEAD
        <SearchBar/>

        {/*<p>{data.members}</p>*/}

=======
      {/* <Router>
        <Routes>
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router> */}

      {/* <DetailPage displayData={displayData} /> */}
      <SearchPage displayData={displayData} />
>>>>>>> 1acb24583364e3c8f2401d9a65b97f4d105735db
    </div>
  );
}

export default App;
