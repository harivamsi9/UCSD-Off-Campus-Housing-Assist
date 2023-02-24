To send a JSON response from the backend to the frontend in a Node.js environment, you can use the res.json() method of the Response object in the backend code. Here's an example:

Backend code:

javascript

app.post('/search', (req, res) => {
  // process the incoming JSON data from the request body
  const filteredData = processSearchData(req.body.data);

  // send the filtered data back to the frontend as a JSON response
  res.json(filteredData);
});


In this example, the server listens for a POST request to the /search endpoint. The request body is expected to contain JSON data, which is processed by a function called processSearchData(). The resulting filtered data is sent back to the frontend using the res.json() method.

In the frontend code, the JSON response can be accessed using the Response.json() method as follows:

Frontend code:

javascript

function fetch_filter_results(json) {
  fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: json })
  })
  .then(res => res.json())
  .then(data => {
    // handle the response data here
    console.log(data);
  })
  .catch(error => {
    // handle any errors that occur during the fetch request
    console.error(error);
  });
}


In this example, the res.json() method is used to extract the JSON response data from the Response object returned by the fetch() method. The resulting data is then logged to the console using console.log().



