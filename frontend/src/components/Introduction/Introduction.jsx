import './Introduction.css'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
//images
import carImage from '../../images/car-2.png'

const Introduction = () => {
    return (
         <div className='introduction--container' id='introduction'>

            <div className='introduction--information'> 

            <div className='introduction--text'>
                <p><span>Expert</span> Car Repair &</p>
                <p>Maintenance Service</p>
            </div> 

            <div className='introduction--button'>
                <button>Get Started <FontAwesomeIcon icon={faCaretUp} rotation={90} fixedWidth /></button>
                <div className='introduction--reviews'>
                    <p>Customer Reviews</p>
                    <span><FontAwesomeIcon icon={faCircleCheck} /> 23 Happy Customers</span>
                </div>
            </div>

            </div> 

            <div className='introduction--image'>
                <img src={carImage} alt="" />
            </div>
         </div>
    );
} 


export default Introduction;