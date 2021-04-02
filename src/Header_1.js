import React from 'react';
import '../src/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



  
function Header_1(){
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        
            <nav class="Header" >
            <Link to="/"> 
            <img class="Header_1_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt ="" />
            </Link>        
            <div class="Header_search">
                <input class="Header_searchInput" type="text" />
                <SearchIcon class ="Header_searchIcon" />
                
            </div>
            <div class="Header_nav">
            <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} class='Header_option'>
                    <span class='Header_optionLineOne'>Hello {!user ? 'Guest' : user.email} </span>
                    <span class='Header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>

                <Link to='/orders'>
                <div class='Header_option'>
                    <span class='Header_optionLineOne'>Returns </span>
                    <span class='Header_optionLineTwo'>& Orders</span>
                </div>
                </Link>
                <div class='Header_option'>
                    <span class='Header_optionLineOne'>Your </span>
                    <span class='Header_optionLineTwo'>Prime</span>
                </div>
                <Link to='/Checkout'>
                <div class="Header_optionBasket"><ShoppingCartIcon /> 
                    <span class="Header_optionLineTwoheader_basketCount">{basket?.length}</span>
                </div>
                </Link>

            </div>
            </nav>
       
    );
}


export default Header_1;    