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
      <div className='containerCompetences row bg-danger'>
        <div className='col-3'>
          <img src= {html} alt="langage html" width="100px" height="100px" />
        </div>
        <div className='col-3'>
          <h3>html</h3>
        </div>
      </div>

      <div className='containerCompetences row'>
        <div className='col-6'>
          <img src= {css} alt="css" width="100px" height="100px" />
        </div>
        <div className='col-6'>
          <h3>css</h3>
        </div>
      </div>

      <div className='containerCompetences row'>
        <div className='col-6'>
          <img src= {javascript} alt="javascript" width="100px" height="100px" />
        </div>
        <div className='col-6'>
          <h3>Javascript</h3>
        </div>
      </div>

      <div className='containerCompetences row'>
        <div className='col-6'>
          <img src= {bootstrap} alt="librairie bootstrap" width="100px" height="100px" />
        </div>
        <div className='col-6'>
          <h3>Bootstrap</h3>
        </div>
      </div>

      <div className='containerCompetences row'>
        <div className='col-6'>
          <img src= {react} alt="framework react" width="100px" height="100px" />
        </div>
        <div className='col-6'>
          <h3>React</h3>
        </div>
      </div>

      <div className='containerCompetences row'>
        <div className='col-6'>
          <img src= {github} alt="versionning github" width="100px" height="100px" />
        </div>
        <div className='col-6'>
          <h3>Github</h3>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Competences
