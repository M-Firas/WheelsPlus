import './Footer.css'
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
<footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#introduction">About Us</a></li>
  	 				<li><a href="#services">Our Services</a></li>
  	 				<li><a href="#pricing">Pricing</a></li>
                    <li><a href="#ratings">Ratings</a></li>
  	 				<li><a href="#contactus">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    )
} 


export default Footer;