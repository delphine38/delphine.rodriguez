import React, { useEffect, useState } from 'react';

//dans terminal : npm react-scroll
import {Link} from 'react-scroll';

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
                <li className='items'>
                    <Link to="#home" spy={true} smooth={true} offset={50} duration={500}>Accueil</Link>
                </li>
            <li className='items'>
                <Link to="#realisations" spy={true} smooth={true} offset={50} duration={500}>Réalisations</Link>
            </li>
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
