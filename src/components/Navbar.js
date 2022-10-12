import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// intéraction et animation avec 
// "useState" et 
// "useEffect" pour lorsque le composant est chargé

import velo from "../images/velo.jpg";


const Navbar = () => {

const [toggleMenu, setToggleMenu] = useState(false);
const [largeur, setLargeur] = useState(window.innerWidth);

const toggleNavSmallScreen = () =>{
    setToggleMenu(!toggleMenu);
}

useEffect(() =>{

    const changeWidth = () => {
        setLargeur(window.innerWidth);

        if(window.innerWidth >500 ){
            setToggleMenu(false);
        }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
        window.removeEventListener('resize', changeWidth);
    }

}, [] )


  return (
<div>
    <nav>
        
        <article className='nav'>
            <img src= {velo} alt="vélo dans un ordinateur" width="100px" height="100px" />
            {/* <article> */}
                        <h1 className='mt-5'>Delphine RODRIGUEZ | Développeuse web Junior</h1>
                    {/* </article> */}
        </article>
        {(toggleMenu || largeur > 500) && (
            <ul className='list'>
                <a href='/#home'><li className='items'>Accueil</li></a>
                <a href='/#realisations'><li className='items'>Réalisations</li></a>
                <a><li className='/#competences'>Compétences</li></a>
            {/* <li className='items'>Accueil</li>
            <li className='items'>Réalisations</li>
            <li className='items'>Compétences</li> */}
        </ul>
        ) }
        
        {/* <button className='btn'>X</button> */}
        <button onClick={toggleNavSmallScreen} className='btn'>X</button>
    </nav>

    {/* <div className='container'>
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
    </div> */}
    </div>
  )
}

export default Navbar
