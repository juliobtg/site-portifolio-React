import React from 'react'
import Tudo from './Img/tudo.png'
import Ecomerce from './Img/ecomerce.png'
import Buscador from './Img/buscador.png'


function Projects() {
  return (
    
<div class="projetos" id="projetos-id">
    <h2>projetos</h2>


<div class="card-projetos">
  <div class="card">
    <img src={Tudo} />
<h5>Todo list</h5>

<p>Projeto de uma lista de tarefas com HTML,CSS,JAVASCRIPT, que
    adiciona e deleta itens da lista  e usa o local Storage para armarsenar
    as informaçoes no navegador
</p>
<a href="https://tudo-list-javascript.vercel.app" target="_blank">Ver projeto</a>
  </div>

  <div class="card">
    <img src={Ecomerce} />
<h5>Blue story</h5>

<p>Ecomerce RESPOSIVO feito com HTML,CSS </p>
<a href="https://ecomece-resposivo-html-css.vercel.app/" target="_blank">Ver projeto</a>
  </div>

  <div class="card">
    <img src={Buscador} />
<h5>Buscador de cep</h5>

<p>Buscador  feito com REAT com que faz requiziçao na  api que retorna cep rua, bairro,cidade e estado</p>
<a href="https://buscador-de-cep-plum.vercel.app/" target="_blank">Ver projeto</a>
  </div>

</div>


</div>

  )
}

export default Projects