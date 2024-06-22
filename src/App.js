import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Items from "./components/items/Items";
import Restaurant from "./components/retaurant/Restaurant";
import Help from "./components/Help/Help";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { CountProvider } from "./components/context/Context";
import Categeory from "./components/categeory/Categeory";
import Todaysspecial from "./components/Todaysspecial/Todaysspecial";
import Steps from "./components/steps/Steps";
import Orders from "./components/orders/Orders";
import Footer from "./components/fotter/Footer";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form/Form";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/Form/Form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import StripePayment from "./components/StripePayment";


function App() {
  return (
    <CountProvider>
      <BrowserRouter>
      
        <Header />
        <ToastContainer theme="dark" />
        {/* <Elements  stripe={stripepromise}>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Help" element={<Help />} />
          <Route
            path="/restaurant/:id"
            element={
              <>
                <Menu />
              </>
            }
          />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/Form" element={<Signup/>} /> 
          <Route path="/payment" element={<StripePayment/>}/>
        </Routes>
        {/* </Elements> */}
      </BrowserRouter>
    </CountProvider>
  );
}

export default App;
