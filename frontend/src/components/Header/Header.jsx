import './Header.css'
//hooks
import { useEffect, useState, useRef } from 'react';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const [open, setOpen] = useState(false); 
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
        if(!menuRef.current.contains(e.target)){
            setOpen(false);
        }
    };
    document.addEventListener('mousedown', handler);

    return() => {
        document.removeEventListener('mousedown', handler);
    }
  });


    return (
        <div className="header--container">
           <div className='navbar'>
           <div className="header--name">
              <p>WheelsPlus</p>
            </div> 

            <div className="header--selections">
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#ratings">Ratings</a></li> 
                </ul>
            </div> 

            <div className="header--contact">
               <button>  <a href="#contactus">Contact Us</a></button>
            </div> 

           <div className='menu--container' ref={menuRef}>
            
           <div className='toggle--btn' onClick={() => {setOpen(!open)}}>
            <div><FontAwesomeIcon icon={faBars}  /></div>
            </div> 

            <div className= {`dropDown--menu ${open? 'open' : 'closed'}`}  >
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#ratings">Ratings</a></li>
                    <li><button><a href="#contactus">Contact Us</a></button></li>
            </div>
           </div>
           </div>
            
        </div>
    );
} 

export default Header;