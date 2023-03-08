import { useState } from 'react'


function fetch_filter_results(json) {
    return fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: json
      })
    })
    //   .then(res => res.json())
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


// function fetch_filter_results(json, props) {

//     fetch("/search", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             data: json
//         })
//     })
//         .then(
//             res => res.json()
//         ).then(
//         data => {
//             console.log(data)
//             props.setDisplayData(data)
//         }
//     )
// }

export default fetch_filter_results