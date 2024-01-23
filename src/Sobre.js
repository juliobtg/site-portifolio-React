import React from 'react'
import perfil from './Img/fotoperfil.jpg'

function Sobre() {
  return (
<section id="sobre">
    <img src={perfil}  />
    <div>
        <h2>Sobre mim</h2>
        <p>
        Sou desevolvedor front end com 1 ano de experiencia em desevolvimento web possuo conhecimento nas tecnologias
         HTML, CSS ,JAVASCRIPT, REACT, TYPSCRIPT, NODE, GIT, GITHUB com noçoes
         basicas de SQL. com foco em apreder novas habilidades e aumentar meus resultados
        </p>
    </div>
</section>
)
}

export default Sobre