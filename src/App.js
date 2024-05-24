import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Items from './components/items/Items';
import Restaurant from './components/retaurant/Restaurant';
import Help from './components/Help/Help';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { CountProvider } from './components/context/Context';
import Categeory from './components/categeory/Categeory';
import Todaysspecial from './components/Todaysspecial/Todaysspecial';
import Steps from './components/steps/Steps';

function App() {
 
 
  return (
    
 <CountProvider>

 <BrowserRouter>
<Header/>
  <Routes> 
  <Route path="/" element={<> <Banner/> <Categeory/>
   <Restaurant/>  <Steps/> </>}/>
  <Route path="/Help" element={<Help/>}/>
  <Route path="/restaurant/:id" element={ <><Items/> <Menu /> </> }/>
  <Route path="/cart" element={<Cart/>}/>
  
  </Routes>

</BrowserRouter>
 </CountProvider>
   

 
  );
}

export default App;
