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
  return (
    <div className="App">
        <SearchBar/>

        {/*<p>{data.members}</p>*/}

    </div>
  );
}

export default App;
