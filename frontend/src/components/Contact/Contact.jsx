import './Contact.css'
//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
   return (
      <div className='contact--container' id='contactus'>
       <div className='contact'>
       <div className='contact--left'>
            <p>You can Contact Us Via</p>
            <div className='left--icons'>
            <a><FontAwesomeIcon icon={faTelegram} style={{color: "#1aa7ec",}} size='2xl' /></a>
            <a><FontAwesomeIcon icon={faWhatsapp} style={{color: "#1aa7ec",}} size='2xl' /></a>
            <a><FontAwesomeIcon icon={faInstagram} style={{color: "#1aa7ec",}} size='2xl' /></a>
            </div>
        </div> 
        <div className='contact--middle'>
            <p>OR</p>
        </div>
        <div className='contact--right'>
             <form> 
                <p>You Can Send Us A Message</p>
                
                <label>Your Email</label>
                <input className='email'></input>

                <label>Your Message</label>
                <textarea className='message'></textarea> 

                <button>Send</button>
             </form>
        </div>
       </div>
      </div>
   );
} 

export default Contact;