import React from "react";
import  ReactDOM  from "react-dom/client";

//navbar--------------------------------------

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="nav-logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const ResCard = (props) => {
    console.log(props);
   return (
    <div className="rest-card">
        <img alt="no image"  className="card-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er" />


        <h3>{props.ResName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4 stars</h4>
        <h4>40 mins</h4>
    </div>
   )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               <ResCard ResName= "Meghna Foods"
               cuisine= "biryani, North Indian" />

               <ResCard  ResName= "KFC" cuisine= "burger , pasties"/>
              
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
           {<Header/>}
           {<Body />}
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);