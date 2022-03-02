import React,{} from "react";
import {Nav, Navbar,Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Navv = () => {
    return(


        
        
        <div className="nav">
                <div className="logo"> productsCart </div>

       
                <ul>
                    <NavLink style={{ textDecoration:'none'}} className="show-products-nav" to ="/"><li>Products</li></NavLink>
                    <NavLink style={{ textDecoration:'none'}} className="add-products-nav" to="/addProduct"><li>AddProduct</li></NavLink>
                </ul>    
               
        </div>

    );
};
export default Navv;