import "./overview.scss";
import { ReactComponent as StarIcon } from "../../images/SVG/star.svg";
import { ReactComponent as LocationIcon } from "../../images/SVG/location-pin.svg";

const Overview = () => {
    return (
        <div className="overview">
            <h1 className="overview__heading">Hotel las pallas</h1>
            <h1 className="overview__stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </h1>
            <div className="overview__location">
                <LocationIcon />
                <button className="overview__location-btn">Albufeira, Portugal</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">492 votes</div>
            </div>
        </div>
    );
};

export default Overview;
