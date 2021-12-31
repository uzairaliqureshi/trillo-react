import "./description.scss";
import { ReactComponent as RightIcon } from "../../images/SVG/chevron-thin-right.svg";
import friendImage1 from "../../images/user-3.jpg";
import friendImage2 from "../../images/user-4.jpg";
import friendImage3 from "../../images/user-5.jpg";
import friendImage4 from "../../images/user-6.jpg";

const Description = () => {
    const Li = ({ text }) => (<li><RightIcon />  <span>{text}</span></li>);

    return (
        <div className="description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
            </p>
            <p>
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
            <ul>
                <Li text="Free airport shuttle" />
                <Li text="Free wifi in all rooms" />
                <Li text="Air conditioning" />
                <Li text="Pets allowed" />
                <Li text="We speak all languages" />
                <Li text="Breakfast included" />
                <Li text="Close to the beach" />
                <Li text="Perfect for families" />
            </ul>
            <div className="recommend">
                <p>Lucy and 3 other friends recommend this hotel.</p>
                <div className="recommend__images">
                    <img src={friendImage1} alt="frind" />
                    <img src={friendImage2} alt="frind" />
                    <img src={friendImage3} alt="frind" />
                    <img src={friendImage4} alt="frind" />
                </div>
            </div>
        </div>
    );
};

export default Description;
