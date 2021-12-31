import user1 from "../../images/user-1.jpg";
import user2 from "../../images/user-2.jpg";
import "./review.scss";

const Review = () => {
    return (
        <div className="review">
            <div className="review__box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex</p>
                <div className="review__box-user">
                    <img src={user1} alt="user image" />
                    <div>
                        <div className="name">NICK SMITH</div>
                        <div className="date">feb 23rd, 2021</div>
                    </div>
                    <div className="rating">7.8</div>
                </div>
            </div>
            <div className="review__box">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.</p>
                <div className="review__box-user">
                    <img src={user2} alt="user image" />
                    <div>
                        <div className="name">MARY THOMAS</div>
                        <div className="date">jan 1st, 2021</div>
                    </div>
                    <div className="rating">9.2</div>
                </div>
            </div>
            <button><span>show all <span>&rarr;</span></span></button>
        </div>
    );
};

export default Review;
