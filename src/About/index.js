import "./index.css"
import search from "../images/search.png";
import image from "../images/image.jpg";

const About = () =>{
    return(
        <div className="body">
            <div className="navbar">
            <h4><b>Rayn</b></h4>
            <input placeholder="Enter city name" type="text" />
            <img src={search} alt="search" className="image"/>
            </div>
            <div className="first-image">
                <img src={image} alt="image"/>
            </div>
        </div>
        
    )
};

export default About;