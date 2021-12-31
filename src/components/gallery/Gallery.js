import "./gallery.scss";
import hotelImage1 from "../../images/hotel-1.jpg";
import hotelImage2 from "../../images/hotel-2.jpg";
import hotelImage3 from "../../images/hotel-3.jpg";

const Gallery = () => {
    return (
        <div className="gallery">
            <figure className="gallery__item">
                <img src={hotelImage1} alt="hotel image" />
            </figure>
            <figure className="gallery__item">
                <img src={hotelImage2} alt="hotel image" />
            </figure>
            <figure className="gallery__item">
                <img src={hotelImage3} alt="hotel image" />
            </figure>
        </div>
    );
};

export default Gallery;
