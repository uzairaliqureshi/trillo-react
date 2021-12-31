import "./app.scss";
import Cta from "./components/cta/Cta";
import Description from "./components/description/Description";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Overview from "./components/overview/Overview";
import Review from "./components/review/Review";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Sidebar />
                <div className="hotel-view">
                    <Gallery />
                    <Overview />
                    <div className="detail">
                        <Description />
                        <Review />
                    </div>
                    <Cta />
                </div>
            </div>
        </div>
    );
};

export default App;
