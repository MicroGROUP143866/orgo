import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav(){
        return(
            <nav class="navBar">
                <label for="check" class="checkbtn"><i class="fas fa-bars"></i></label>
                <a href="/"><span class="logo">ORGO</span></a>
                <ul class="navList">
                    <li class="navItem"><Link to="/" class="navLink">Home</Link></li>
                    <li class="navItem">
                        <div class="dropdown">
                            <button class="dropbtn">
                                <Link to="/services" class="navLink">
                                    Services
                                    </Link>
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <Link to="/hospitals">Hospitals</Link>
                                <Link to="/blood-banks">Blood Banks</Link>
                            </div>
                        </div>
                    </li>
                    <li class="navItem"><Link to="/become-a-donor" class="navLink">Become a Donor</Link></li>
                </ul>
            </nav>
        );
}
            
export default Nav;