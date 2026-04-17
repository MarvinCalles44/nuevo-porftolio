import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h1>Mis habilidades</h1>
        <div className="skills-base">
            <div className="skills-box">
                <i className="fa fa-laptop-code"></i>
                <h3>Desarrollo Web</h3>
                <p>Me enfoco en el desarrollo web para crear sitios modernos y funcionales utilizando tecnologías como
                    HTML, CSS, JS, PHP y React, intentando siempre mejorar la experiencia del usuario.
                </p>
            </div>
                <div className="skills-box">
                <i className="fa-solid fa-chart-simple"></i>
                <h3>Posicionamiento SEO</h3>
                <p>Uso las mejores prácticas de SEO para mejorar la visibilidad de los sitios web en los motores de búsqueda,
                    de igual forma manejo herramientas de análisis para optimizar el rendimiento y la experiencia del usuario como
                    Google Analitycs y Google Tag Manager. 
                </p>
            </div>
                <div className="skills-box">
                <i className="fa-brands fa-wordpress"></i>
                <h3>Webs con Wordpress</h3>
                <p>Domino la herramienta de gestión de contenidos Wordpress, creando sitios web personalizados y optimizados con 
                    plugins y temas adecuados para cada proyecto, adaptando las necesidades del cliente y usando herramientas como Elementor, WPBakery
                    y Gutenberg.
                </p>
            </div>
        </div>
    </div>
  )
}
