import React from 'react';

function Header(){
    return(
        <header>
           <div className='logo'></div>
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">La brasserie</a></li>
                    <li><a href="#">Les bières</a></li>
                    <li><a href="#">Commander</a></li>
                    <li><a href="#">Nous contacter</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
