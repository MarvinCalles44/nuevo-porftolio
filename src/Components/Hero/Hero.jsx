import "./Hero.css";
import foto from "../../assets/foto.png";

export const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container" >
        <span>Hola Soy,</span>
        <h1>Elías Calles</h1>
        <p>Mi pasión por la programación web y mis habilidades en Javascript, CSS, Wordpress y React me impulsan a crear proyecto y soluciones que sean llamativos, funcionales y efectivos</p>
        <a href="https://wa.me/50372229294" target="_blank" className="btn">Contáctame</a>
      </div>

      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={foto} alt="" className="foto"/>
      </div>
    </div>
    

    
  )
}
