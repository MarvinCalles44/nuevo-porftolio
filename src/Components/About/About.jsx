import "./About.css";
import foto2 from "../../assets/foto2.png";

export const About = () => {
  return (
    <div className="about-details" id="about">
        <div className="circle-bg"></div>
        <img src={foto2} alt="sobre mi" />
        <div className="about-infos">
            <h1>Sobre mí</h1>
            <p className="description">Soy desarrollador web egresado de la carrera Licenciatura en Gerencia Informática, me apasiona el crear
                soluciones digitales que sean innovadoras y funcionales, usando tecnologías como JavaScript, CSS, HTML, React y Wordpress.
            </p>
            <div className="experience-section">
              <div className="experience">
                <i className="fas fa-plus"></i>
                <span>15</span>
                <p>Proyectos realizados</p>
              </div>
              <div className="experience">
                <i className="fas fa-plus"></i>
                <span>1</span>
                <p>Año de experiencia</p>
              </div>
              <div className="experience">
                <i className="fas fa-plus"></i>
                <span>1</span>
                <p>Trabajo profesional</p>
              </div>
            </div>
        </div>
    </div>
  )
}
