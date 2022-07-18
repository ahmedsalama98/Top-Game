import "./Header.css";
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {  

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }



    return (
        <header>
            <nav>
            <div className="container-fluid">
                <div className="nav-wrapper">
                 <div className="logo">
                   <h1>Top Games</h1>
                 </div>


            <div className="nav-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="nav-items">

            <ul className={isOpen == true ? "show":""}>

                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/new-game">New Games </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/Slots">Slots </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/Jackpots">Jackpots </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/Live">Live </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/BlackJack">BlackJack </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/Roulette">Roulette </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/Poker">Poker </NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "active" : ""}  to="/Other">Other </NavLink></li>


           


            </ul>
            </div>
        </div>
                </div>
    
           </nav>
        </header>
    )

 }



 export default Header;