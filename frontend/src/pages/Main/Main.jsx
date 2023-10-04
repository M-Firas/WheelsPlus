
import Brands from '../../components/Brands/Brands';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Introduction from '../../components/Introduction/Introduction';
import Pricing from '../../components/Pricing/Pricing';
import Ratings from '../../components/Ratings/Ratings';
import Services from '../../components/Services/Services';
import './Main.css'


const Main = () => {
      return (
        <div>
            <Header /> 
            <Introduction /> 
            <Brands />  
            <Services /> 
            <Pricing />
            <Ratings /> 
            <Contact />
            <Footer />
        </div>
      );
} 


export default Main;