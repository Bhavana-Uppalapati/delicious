import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Items from './components/items/Items';
import Restaurant from './components/retaurant/Restaurant';
import Help from './components/Help/Help';
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import { CountProvider } from './components/context/Context';
import Categeory from './components/categeory/Categeory';
import Todaysspecial from './components/Todaysspecial/Todaysspecial';
import Steps from './components/steps/Steps';
import Orders from './components/orders/Orders';
import Footer from './components/fotter/Footer';
import { ToastContainer } from 'react-toastify';
import Form from './components/Form/Form';

function App() {
 
 return (
    
    
 <CountProvider>

 <BrowserRouter>
<Header/>
<ToastContainer theme="dark"/>
  <Routes> 
  <Route path="/" element={<> <Banner/> <Categeory/>
   <Restaurant/>  <Steps/>  <Footer/></>}/>
  <Route path="/Help" element={<Help/>}/>
  <Route path="/restaurant/:id" element={ <> <Menu /> </> }/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/Orders" element={<Orders/>}/>
  <Route path="/Form" element={<Form/>}/>
   </Routes>

</BrowserRouter>

 </CountProvider>
   

 
  );
}

export default App;
