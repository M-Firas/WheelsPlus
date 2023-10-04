import "./Ratings.css";
//react-multi-carousel library 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
//images and icons 
import user from '../../images/user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Ratings = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ratings--contanier" id="ratings">
      <div className="ratings">
        <h2>Our Customers Ratings</h2>

        <Carousel responsive={responsive}>
          <div className="ratings--card">
           <img src={user} alt=""  width='100px' height='100px'/> 
           <p className="firstP">John Smith</p>
           <ul>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
           </ul> 

           <p className="secondP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias reiciendis optio dolores sequi.</p>
          </div>
          <div className="ratings--card">
          <img src={user} alt=""  width='100px' height='100px'/> 
           <p className="firstP">Jim Nomad</p>
           <ul>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
           </ul> 

           <p className="secondP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias reiciendis optio dolores sequi.</p>
          </div>
          
          <div className="ratings--card">
          <img src={user} alt=""  width='100px' height='100px'/> 
           <p className="firstP">Mike Lewis</p>
           <ul>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
           </ul> 

           <p className="secondP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias reiciendis optio dolores sequi.</p>
          </div>
          <div className="ratings--card">
          <img src={user} alt=""  width='100px' height='100px'/> 
           <p className="firstP">Emma Doe</p>
           <ul>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
            <li><FontAwesomeIcon icon={faStar} color="gold"  /></li>
           </ul> 

           <p className="secondP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias reiciendis optio dolores sequi.</p>
          </div>
         
        </Carousel>
      </div>
    </div>
  );
};


export default Ratings;