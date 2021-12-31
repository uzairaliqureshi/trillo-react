import "./sidebar.scss";
import { ReactComponent as HomeIcon } from "../../images/SVG/home.svg";
import { ReactComponent as FlightIcon } from "../../images/SVG/aircraft-take-off.svg";
import { ReactComponent as KeyIcon } from "../../images/SVG/key.svg";
import { ReactComponent as MapIcon } from "../../images/SVG/map.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="icon-box">
                <div className="sidebar__icon">
                    <HomeIcon /><span>hotel</span>
                </div>
                <div className="sidebar__icon">
                    <FlightIcon /> <span>flight</span>
                </div>
                <div className="sidebar__icon">
                    <KeyIcon /> <span>car rental</span>
                </div>
                <div className="sidebar__icon">
                    <MapIcon /> <span>tours</span>
                </div>
            </div>
            <div className="copyright">© 2021 by trillo. All rights reserved.</div>
        </div>
    );
};

export default Sidebar;
