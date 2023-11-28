import React from 'react'
import perfil from './Img/fotoperfil.jpg'

function Sobre() {
  return (
<section id="sobre">
    <img src={perfil}  />
    <div>
        <h2>Sobre mim</h2>
        <p>
            Sou um Desenvolvedor FULL STACK. Tenho conhecimento em HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, NODE.JS. Atualmente trabalho 9 meses como freelancer desenvolvendo projetos com essas tecnologias.
        </p>
    </div>
</section>
)
}

export default Sobre