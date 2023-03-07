import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import './detailPage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function DetailPage() {
    const location = useLocation();
    const data = location.state.data;

    const handleTest = () => {
        console.log(data);
    }

    const [imgIndex, setImgIndex] = useState(0);

    const handleNavImg = (e) => {
        if (e.target.innerHTML === "left") {
            if (imgIndex >= 1) setImgIndex(imgIndex - 1);
            else setImgIndex(data.images.length - 1);
        } else if (e.target.innerHTML === "right") {
            if (imgIndex < data.images.length - 1) setImgIndex(imgIndex + 1);
            else setImgIndex(0);
        }
    }

    return (
        <div className="detailPage">
            <div className="carouselWrapper">
                <Carousel className="myCarousel">
                    {data.images.length > 0 && data.images.map((val, index) => {
                        return (
                            <div className="imgWrapper">
                                <img src={process.env.PUBLIC_URL + "/images/" + val} key={index} alt="image not exist" />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className="detailSection">
                <div className="contact">
                    <h3>Info</h3>
                    <div className="info">Address: {data.address}</div>
                    <div className="info">Website: {data.website}</div>
                    <div className="info">Phone: {data.contact}</div>
                </div>

                <div className="pastPrice">
                    <h3>Previous Price</h3>
                    {data.historicRent.length > 0 && data.historicRent.map((val, index) => {
                        return (
                            <p key={index}>Move In: {val.date_in}, Move Out: {val.date_out}, Rent: {val.monthly_rent}</p>
                        )
                    })}
                </div>
                <div className="review-title">
                    <h3>Reviews</h3>
                </div>
                <div className="reviews">
                    {data.reviews.length > 0 && data.reviews.map((val, index) => {
                        return (
                            <div className="review" key={index}>
                                <p>Rating: {val.rating}</p>
                                <p>Comment: {val.comment}</p>
                                <p>Date: {val.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/*<button onClick={handleTest}>test</button>*/}
        </div>
    );
}

export default DetailPage;