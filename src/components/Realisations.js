import React from 'react'
import gitHub from '../images/skills/github.png';
import votreAge from '../images/projects/votreage.jpg';
import theaAndMom from '../images/projects/theaandmom.jpg';
import crudJavascript from '../images/projects/crudjavascript.jpg';
import mathsJs from '../images/projects/mathsjs.jpg';
import compteurReact from '../images/projects/compteurreact.jpg';


import html from '../images/skills/html.jpg';


const Realisations = () => {
  return (
    <div className='realisationsDiv' id='#realisations'>
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
              
              <div className='hidden'>
                <a href={"https://votreage.netlify.app/"} className="aImageOpacity" target="_blank">
                  <h3>Application : votre âge <br/> pour connaitre votre age en jours</h3>
                  <p>Javascript</p> 
                </a>
                <a href={"https://github.com/delphine38/age"} target="_blank">
                  <img src={gitHub} alt="gitHub de ton âge en jours" width="60px" />
                </a>

              </div>
              
            </div>
            
          
        


          {/* Théa and mom's création */}
          
            <div className='realisations col-3'>
              <div className='realisationsRelative'>
                    <img src={theaAndMom} alt="web site théa and mom's création" width="90%"/>
              </div>
              <a href={"https://theaandmomcreations.netlify.app/"} className="aImageOpacity" target="_blank">
                <div className='hidden'>
                    <h3>Web site en cours de Théa and Mom's <br /> (La maman crée des bijoux avec sa fille)</h3>
                    <p>React</p>
                    <a href={"https://github.com/delphine38/theaandmomreact"} target="_blank">
                      <img src={gitHub} alt="gitHub de thea and mom's en react" width="60px" />
                    </a>
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
                  <p>Javascript</p>
                  <a href={"https://github.com/delphine38/CreateReadUpdateDelete"} target="_blank">
                    <img src={gitHub} alt="gitHub de C.R.U.D. en javascript" width="60px" />
                  </a>
              </div>
            </a>
          </div>

          {/* testdecalculjavascript */}
          <div className='realisations col-3'>
            <div className='realisationsRelative'>
                  <img src={mathsJs} alt="revision de maths" width="90%"/>
            </div>
              <a href={"https://github.com/delphine38/testdecalculjavascript"} className="aImageOpacity" target="_blank">
              <div className='hidden'>
                  <h5>Application pour réviser ses Maths</h5>
                  <p>Javascript</p>
                  <a href={"https://github.com/delphine38/testdecalculjavascript"} target="_blank">
                    <img src={gitHub} alt="gitHub de stickers" width="60px" />
                  </a>
              </div>
            </a>
          </div>

          {/* compteurreact */}
          <div className='realisations col-3'>
            <div className='realisationsRelative'>
                  <img src={compteurReact} alt="un compteur pour ajouter ou enlever" width="90%"/>
            </div>
              <a href={"https://compteurreact.netlify.app/"} className="aImageOpacity" target="_blank">
              <div className='hidden'>
                  <h5>Application en React.js pour ajouter ou enlever</h5>
                  <p>React.js</p>
                  <a href={"https://github.com/delphine38/compteurreact"} target="_blank"><img src={gitHub} alt="gitHub de stickers" width="60px" />
                  </a>
              </div>
            </a>
          </div>
        </div>
      </div>
                        </div>

  )
}

export default Realisations
