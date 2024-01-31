import React from 'react'
import Git from './Img/github.png'
import Wat from './Img/watsap.avif'
import Link from './Img/linkedin.jpg'
import Gmail from './Img/Gmail-Logo.png'

function Contact() {
  return (
    <footer id="fale-comigo">
   
    <div class="social">
    <a href="https://github.com/juliobtg" target="_blank"><img src={Git} /></a>
    <a href="https://wa.me/+5531998974734" target="_blank"><img src={Wat} /></a>
    <a href="https://www.linkedin.com/in/julio-luciano-9ba63721b/" target="_blank"><img src={Link} /></a>
    <a href="mailto:julioluciano248@gmail.com" target="_blank"> <img src={Gmail} /></a>
    </div>
</footer>
  )
}

export default Contact