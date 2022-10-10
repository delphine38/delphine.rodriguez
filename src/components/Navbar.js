import React from 'react';
import velo from "../images/velo.jpg";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarFlex'>
            <article className='d-flex'>
                <img src= {velo} alt="vélo dans un ordinateur" width="100px" height="100px" />

                <article>
                    <h1>Delphine RODRIGUEZ | Développeuse web Junior</h1>
                </article>
            </article>
            
            
            <div>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="">Réalisations</a></li>
                    <li><a href="">Compétences</a></li>
                    <li><a href="">A propos de moi</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
