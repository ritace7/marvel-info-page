import React from 'react';
import logo from '../assets/logo_footer.png';

const Footer = () => {
    return ( 
        <footer>
            <div className='developer'>
                Created By
                <a href="https://www.linkedin.com/in/hritesh7/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    RITACE
                </a>
            </div>
            <div className="creator">
                &copy; All Rights Reserved by
                <a 
                    href="https://developer.marvel.com/"
                    target="_blank" 
                    rel="noreferrer"
                >
                    <img src={logo} alt='marvel-banner' />
                </a>
            </div>
        </footer>
    );
}
 
export default Footer;