import React from 'react'
import votreAge from '../images/projects/votreage.jpg';
import theaAndMom from '../images/projects/theaandmom.jpg';
import crudJavascript from '../images/projects/crudjavascript.jpg';


import html from '../images/skills/html.jpg';


const Realisations = () => {
  return (
    <div className='realisationsDiv'>
        <p>Réalisations</p>
      <h2>Les projets que j'ai réalisés</h2>


      

      <div className='container'>
        <div className='containerRealisations row'>


          {/* découvre ton age en jours */}
          <div className='realisations col-3'>
            <div className='realisationsRelative'>
                {/* <a href={"https://votreage.netlify.app/"} className="aImageOpacity" target="_blank"> */}
                  <img src={votreAge} alt="application pour découvrir ton âge en jours" width="90%"/>
                {/* </a>    */}
            </div>
            <a href={"https://votreage.netlify.app/"} className="aImageOpacity" target="_blank">
            <div className='hidden'>
                <h3>Application : votre âge <br/> pour connaitre votre age en jours</h3>
                <p>Javascript</p> 
            </div>
            </a>
          </div>


          {/* Théa and mom's création */}
          <div className='realisations col-3'>
            <div className='realisationsRelative'>
                  <img src={theaAndMom} alt="web site théa and mom's création" width="90%"/>
            </div>
            <a href={"https://theaandmomcreations.netlify.app/"} className="aImageOpacity" target="_blank">
              <div className='hidden'>
                  <h3>Web site en cours de Théa and Mom's <br /> (La maman crée des bijoux avec sa fille)</h3>
              </div>
            </a>
          </div>


          {/* crud Javascript */}
          <div className='realisations col-3'>
            <div className='realisationsRelative'>
                  <img src={crudJavascript} alt="web site théa and mom's création" width="90%"/>
            </div>
            <a href={"https://createreadupdatedeletejavascript.netlify.app/"} className="aImageOpacity" target="_blank">
              <div className='hidden'>
                  <h5>Exercice en javascript pour lister les missions à réalisés</h5>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Realisations
