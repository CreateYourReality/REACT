import "./Footer.css"
import pizza from "../assets/img/pizza.jpeg"

const Footer = (title) => {
    return (  
        <footer id="footerSection">
            <span></span>
            <div>
                <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div>
            <div>
                <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div>
            <div>
                <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div>
            <div>
                <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div>
            <span></span> 
            <span></span> 
            <div>
            <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div><div>
            <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div><div>
            <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div><div>
            <img src={pizza} alt="test" />
                <h5>{title.value}</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorem.</h6>
                <p>preis</p>
            </div>
            <span></span>
        </footer>
    );
}
 
export default Footer;