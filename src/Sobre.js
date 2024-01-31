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
         basicas de SQL.Estou aberto a novos desafios e oportunidades de aprendizado! Ansioso
          para contribuir com equipes inovadoras e colaborar no
          desenvolvimento de soluções impactantes. 
        </p>
    </div>
</section>
)
}

export default Sobre