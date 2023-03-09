import { useState } from 'react'


async function fetch_filter_results(json) {
    try {
        const response = await fetch('http://127.0.0.1:5000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: json
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
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