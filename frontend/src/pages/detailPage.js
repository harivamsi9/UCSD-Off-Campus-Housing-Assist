import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import './detailPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function DetailPage(props) {
    const location = useLocation();
    const data = location.state.data;

    const handleTest = () => {
        console.log(data);
    }

    return (
        <div className="detailPage">
            <div className="carouselWrapper">
                <Carousel className="myCarousel" autoPlay interval={3000}>
                    {data.images.length > 0 && data.images.map((val, index) => {
                        return (
                            <img src={process.env.PUBLIC_URL + "/images/" + val} key={index} alt="image not exist" />
                        )
                    })}
                </Carousel>
            </div>
            <div className="detailSection">

                <div className="contact">
                    <h3 className="title">Info</h3>
                    <div className="info">Address: {data.address}</div>
                    <div className="info">Website: {data.website}</div>
                    <div className="info">Contact: {data.contact}</div>
                </div>

                {/* <h3>Details of the apartment</h3>

                <div className="info">Address: {data.address}</div>
                <div className="info">Website: {data.website}</div>
                <div className="info">Phone: {data.contact}</div> */}

                <div className="pastPrice">
                    <h3 className="title">Previous Prices</h3>
                    {data.historicRent.length > 0 ? data.historicRent.map((val, index) => {
                        return (
                            <p key={index}>Move In: {val.date_in}, Move Out: {val.date_out}, Rent: {val.monthly_rent}</p>
                        )
                    }) : <p>No previous prices for this apartment</p>}
                </div>
                <div className="review-title">
                    <h3 className="title">Reviews</h3>
                </div>
                <div className="reviews">
                    {data.reviews.length > 0 ? data.reviews.map((val, index) => {
                        return (
                            <div className="review" key={index}>
                                <p>Rating: {val.rating}</p>
                                <p>Comment: {val.comment}</p>
                                <p>Date: {val.date}</p>
                            </div>
                        )
                    }) : <p className="noReviews">No reviews for this apartment</p>}
                </div>
            </div>

        </div>
    );
}

export default DetailPage;