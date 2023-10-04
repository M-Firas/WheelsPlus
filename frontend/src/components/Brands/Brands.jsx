import './Brands.css' 
//react-multi-carousel library 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//logos
import sokda from '../../images/skoda.svg'
import bmw from '../../images/bmw.svg'
import mercedes from '../../images/mercedes.svg'
import toyota from '../../images/toyota.svg' 
import volkswagen from '../../images/volkswagen.svg'




const Brands = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div className='brands--container'>

            <div className='brands--title'>

                <h2>Trusted by Top Cars Manufactures</h2>

                <Carousel  responsive={responsive}>
                <div className='card'><img src={mercedes} alt="" width='50px' height='50px' />Mercedes-Benz</div>
                  <div className='card'><img src={bmw} alt="" width='50px' height='50px' />BMW</div>
                <div className='card' ><img src={sokda} alt="" width='50px' height='50px' />Skoda</div>
                <div className='card' ><img src={toyota} alt="" width='50px' height='50px' />Toyota</div>
               <div className='card' ><img src={volkswagen} alt="" width='50px' height='50px' />Volkswagen</div>
              </Carousel>
            </div> 

        </div>
    );
} 

export default Brands;