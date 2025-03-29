import React from 'react';
import PESU from '../images/PES logo.png';
import '../App'

function Footer(){
    return(
        <>
        <footer class="footer">    
        
        <img src={PESU} class="pesLogo" alt="Pes University"></img>        
        <div class="footerSpace"></div>
        <p class="footerText">DEPARTMENT OF CSE</p>
        </footer>
        </>
    );
}

export default Footer