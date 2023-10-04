import Cards from '../Cards/Cards';
import './Pricing.css';



const Pricing = () => {
  return (
    <div className='pricing--container' id='pricing'>
    <h1>Pricing Plan</h1> 
   <div className='pricing--cards'>
   <Cards 
      price='40$'
      type='Basic'
      featureOne='Oil change'
      featureTwo='Filter replacement'
      featureThree='Brake inspection'
    />
    <Cards 
      price='69$'
      type='Standard'
      featureOne='Engine diagnostics'
      featureTwo='Transmission repair'
      featureThree='Electrical system'
    /> 
    <Cards 
      price='99$'
      type='Premium'
      featureOne='Battery replacement'
      featureTwo='Fuel system cleaning'
      featureThree='Cooling system repair'
    />
   </div>
   </div>
  )
} 


export default Pricing;