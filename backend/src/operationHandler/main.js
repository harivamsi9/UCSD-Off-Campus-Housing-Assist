

app.post('/search', (req, res) => {
    // process the incoming JSON data from the request body
    const filteredData = processSearchData(req.body.data);
  
    // send the filtered data back to the frontend as a JSON response
    res.json(filteredData);
  });