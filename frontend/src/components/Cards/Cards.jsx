import './Cards.css'
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';



const Cards = (props) => {
    return (
        <div className='card--container'>
            <h1>{props.price}<span>/car</span></h1> 
            <p className='type'>{props.type}</p> 

            <div className='plan--features'>
                <p><FontAwesomeIcon icon={faCircleCheck} style={{color: "#001220",}} fixedWidth /> {props.featureOne}</p>
                <p><FontAwesomeIcon icon={faCircleCheck} style={{color: "#001220",}} fixedWidth /> {props.featureTwo}</p>
                <p><FontAwesomeIcon icon={faCircleCheck} style={{color: "#001220",}} fixedWidth /> {props.featureThree}</p>
            </div> 

            <button>Choose Plan <FontAwesomeIcon icon={faCaretUp} rotation={90} fixedWidth /></button>
        </div>
    )
} 

export default Cards;