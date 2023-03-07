import { useState } from 'react';
import { testDetail } from '../data/constant'
import testImage1 from '../components/1_1.PNG';
import testImage2 from '../components/1_2.PNG';
import './detailPage.css';
import React, { useEffect } from "react";


function DetailPage() {
    const urls = [testImage1, testImage2, testImage1, testImage1, testImage1, testImage2]
    return (
        <div className="detailPage">
            <div className="imageMapSection">
                <div className="carousel">
                    {urls.length > 0 && urls.map((val, index) => {
                        return (
                            <div className="imgWrapper">
                                <img src={val} key={index} alt="image not exist" />
                            </div>
                        )
                    })}
                </div>
                <div><h2>Google Map Integration</h2></div>
            </div>
            <div className="detailSection">
                <div>{testDetail.propertyName}</div>
                <div className="info">Rating: {testDetail.rating}</div>
                <div className="info">Address: {testDetail.address}</div>
                <div className="info">Website: {testDetail.website}</div>
                <div className="info">Phone: {testDetail.phone}</div>
                <div className="pastPrice">
                    <p>Previous Price</p>
                    {testDetail.historicRent.length > 0 && testDetail.historicRent.map((val, index) => {
                        return (
                            <p key={index}>Move In: {val.dateIn}, Move Out: {val.dateOut}, Rent: {val.monthlyRent}</p>
                        )
                    })}
                </div>
                <div className="reviews">
                    <p>Reviews</p>
                    {testDetail.reviews.length > 0 && testDetail.reviews.map((val, index) => {
                        return (
                            <div className="review" key={index}>
                                <p>Rating: {val.ranking}</p>
                                <p>Comment: {val.comment}</p>
                                <p>Date: {val.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailPage;