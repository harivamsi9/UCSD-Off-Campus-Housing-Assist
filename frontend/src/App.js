import './App.css';
import React, { useEffect, useState } from "react";
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="App">
        <SearchBar/>

        {/*<p>{data.members}</p>*/}

      {/* <Router>
        <Routes>
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router> */}

      {/* <DetailPage displayData={displayData} /> */}
      <SearchPage displayData={displayData} />
    </div>
  );
}

export default App;
