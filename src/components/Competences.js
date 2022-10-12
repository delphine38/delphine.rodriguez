import React from 'react'
import html from '../images/skills/html.jpg';
import css from '../images/skills/cssTransparent.png';
import bootstrap from '../images/skills/bootstrapTransparent.png';
import javascript from '../images/skills/javascript.jpg';
import react from '../images/skills/react.png';
import github from '../images/skills/github.png';



const Competences = () => {
  return (
    <div className='competencesDiv'>
      <p>Compétences</p>
      <h2>Ce que je continue d'améliorer à faire</h2>

      <div className='container'>
        <div className='containerCompetences row'>
          
          <div className='competences col-3'>
            <article>
              <img src= {html} alt="langage html" width="100px" height="100px" />
            </article>
            <article>
              <h3>html</h3>
            </article>
          </div>

          <div className='competences col-3'>
            <article>
              <img src= {css} alt="css" width="100px" height="100px" />
            </article>
            <article>
              <h3>css</h3>
            </article>
          </div>


          <div className='competences col-3'>
            <article>
              <img src= {javascript} alt="javascript" width="100px" height="100px" />
            </article>
            <article>
              <h3>javascript</h3>
            </article>
          </div>

          <div className='competences col-3'>
            <article>
              <img src= {bootstrap} alt="librairie bootstrap" width="100px" height="100px" />
            </article>
            <article>
              <h3>Bootstrap</h3>
            </article>
          </div>

          <div className='competences col-3'>
            <article>
              <img src= {react} alt="framework react" width="100px" height="100px" />
            </article>
            <article>
              <h3>React</h3>
            </article>
          </div>

          <div className='competences col-3'>
            <article>
              <img src= {github} alt="versionning github" width="100px" height="100px" />
            </article>
            <article>
              <h3>Github</h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competences
