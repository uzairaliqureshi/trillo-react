import "./cta.scss";

const Cta = () => {
    return (
        <div className="cta">
            <h2>GOOD NEWS! WE HAVE 4 FREE ROOMS FOR YOUR SELECTED DATES</h2>
            <button>
                <span className="invisible">Only 4 rooms left</span>
                <span className="visible">Book Now</span>
            </button>
        </div>
    );
};

export default Cta;
