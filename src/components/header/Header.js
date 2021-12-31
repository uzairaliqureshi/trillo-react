import logo from "../../images/logo.png";
import userImage from "../../images/user.jpeg";
import { ReactComponent as SearchIcon } from "../../images/SVG/magnifying-glass.svg";
import { ReactComponent as ChatIcon } from "../../images/SVG/chat.svg";
import { ReactComponent as BookmarkIcon } from "../../images/SVG/bookmark.svg";
import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo image" />
            <form action="#" className="header__form">
                <input type="text" className="header__form-input" placeholder="Search hotels" />
                <button className="header__form-button">
                    <SearchIcon className="header__form-button-icon" />
                </button>
            </form>
            <div className="user">
                <div className="user__notification">
                    <BookmarkIcon className="user__notification-icon" />
                    <span>5</span>
                </div>
                <div className="user__notification">
                    <ChatIcon className="user__notification-icon" />
                    <span>12</span>
                </div>
                <div className="user__profile">
                    <img src={userImage} alt="user image" className="user__profile-image" />
                    <span>Uzair</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
