import React from 'react'
import delphine from '../images/delphine.jpg';

const Aboutme = () => {
  return (
    <div className='container aboutMeDiv' id='about'>
      <div className='row aboutFlex'>
        <div className='col-6'>
          <p>A propos de moi 🖐 </p>
          <h2 className='py-2'>Qui suis-je ?</h2>
          <p className='py-2'>Je suis une passionnée de developpement web</p>
          <p>J’ai travaillé de longues années en industries. <br />
            J’ai cotoyé les machines à Commande Numérique en langage Fanuc.</p>
        

          <p>Ma formation web et web mobile ma initié au <br />
             framework Angular en front-end et <br />
             framework Symfony en back-end.</p>
        

          <p>Après ma formation, j'ai découvert le framework react.js sur lequel je continue de m'améliorer.</p>
          <p>Motivée et dynamique, je prend plaisir à coder, pour accroitre mes compétences dans ce monde merveilleux du numérique.</p>
          <p>Curieuse de tout, je saurais être : La future Web Developer of your team en continuant d’apprendre et d’évoluer</p>
        </div>
        <div className='col-6'>
          <img src= {delphine} alt="delphine"  className='aboutDelphine' />
        </div>
      </div>
    </div>
  )
}

export default Aboutme
