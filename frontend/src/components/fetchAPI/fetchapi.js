import { useState } from 'react'


function fetch_filter_results(json, props) {

    fetch("/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: json
        })
    })
        .then(
            res => res.json()
        ).then(
        data => {
            console.log(data)
            props.setDisplayData(data)
            // return data
        }
    )
}

export default fetch_filter_results