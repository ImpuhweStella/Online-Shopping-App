import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import MyShop from './components/MyShop';
import Cart from './components/Cart';

const App = () => {
  const [show,setShow] = useState(false);
  const [cart,setCart] = useState([]);

  return(
    <>
    <Navbar setShow={setShow} />
    <MyShop setShow={setShow} show={show} /> 
    <Cart /> 

    </>



  )
}
export default App