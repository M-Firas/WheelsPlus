import "./Services.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; 
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
//images
import ServicesImage from "../../images/ServicesImage.jpg";  
import ServicesInfoTwoImage from '../../images/servicesInfoTwo.jpg'
import ServicesInfoThreeImage from '../../images/servicesInfoThree.jpg'
import engine from '../../images/engine.svg'; 
import oilCan from '../../images/oil-jar.svg';  
import carGear from '../../images/car-gear.svg' 
import suspension from '../../images/suspension.svg' 
import airConditioner from '../../images/air-conditioner.svg'
import battery from '../../images/battery.svg' 

const Services = () => {
  return (
    <div className="services--container" id="services">
      <div className="services--intro">
        <div className="intro--title">
          <h1>
            <span>Experience</span> Mechanics for Maximum Quality Services
          </h1>
        </div>

        <div className="intro--description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed
            pulvinar proin gravida hendrerit lectus a. Ac felis donec et odio
            pellentesque diam.
          </p>
          <button>
            Learn More{" "}
            <FontAwesomeIcon icon={faCaretUp} rotation={90} fixedWidth />
          </button>
        </div>
      </div>

      <div className="services--image">
        <img src={ServicesImage} alt="" width="1080px" height="601.73px" />
      </div>

      <div className="services--info">
        <h1>We Offer a Wide Range of Services</h1>

        <div className="services--name">
          <div class="services-item">
           <img src={engine} alt="" /> 
           <p>Engine Tune-up</p>
          </div>
          <div class="services-item">
          <img src={oilCan} alt=""  /> 
           <p>Oil Change</p>
          </div>
          <div class="services-item">
             <img src={carGear} alt=""  /> 
           <p>Transmission</p></div>
          <div class="services-item">
             <img src={suspension} alt="" />
             <p>Suspension & Steering</p>
          </div>
          <div class="services-item">
            <img src={airConditioner} alt="" />
             <p>Air Conditioner</p></div>
          <div class="services-item">
            <img src={battery} alt="" />
             <p>Electrical System</p>
             </div>
        </div>
      </div>  

      <div className="services--infoTwo">
        <img src={ServicesInfoTwoImage} alt="" width='443' height='590' /> 
        <div className="infoTwo--info">
         <h1>We Treat Your Car with the Care and Attention It Deserves</h1> 
         <p className="first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
         <div className="checks">
          <p><FontAwesomeIcon icon={faCircleCheck} style={{color: "#1aa7ec",}} fixedWidth />        Experienced and knowledgeable mechanics</p>
          <p><FontAwesomeIcon icon={faCircleCheck} style={{color: "#1aa7ec",}} fixedWidth />        State-of-the-art diagnostic tools</p>
          <p><FontAwesomeIcon icon={faCircleCheck} style={{color: "#1aa7ec",}} fixedWidth />        Convenient and flexible scheduling</p>
         </div> 
         <button>Features</button>
        </div>
      </div> 

      <div className="services--infoThree">
        <div className="infoThree--info"> 
        <h1>Expert Car Repair Services for All Makes and Models</h1> 
        <p className="first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="info--carTypes">

           <div className="grid--item">
                 <h2>SUV</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           </div> 

           <div className="grid--item">
                 <h2>Sedan</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           </div> 

           <div className="grid--item">
                  <h2>Hatchback</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           </div> 

           <div className="grid--item">
                 <h2>MPV</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
           </div>

        </div>
        </div>
        <img src={ServicesInfoThreeImage} alt="" width='443' height='590' />
      </div>



    </div>
  );
};

export default Services;
