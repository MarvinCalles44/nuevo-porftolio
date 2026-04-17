import "./Portafolio.css";
import incubadora from "../../assets/incubadora.png";
import ec from "../../assets/ec.png";
import laborlab from "../../assets/laborlab.png";
import sinfin from "../../assets/sinfin.png";


const portfolioItems = [
  {
    id: 1,
    title: "Incubadora",
    image: incubadora,
    description: "Landing page desarrollada para la empresa AAQA, dedicada a la incubación de empresas.",
    demoLink: "https://ayudandoaquienesayudan.org/requisitos-incubadora/",
  },
  {
    id: 2,
    title: "Emprendimiento Social",
    image: ec,
    description: "Landing page desarrollada para la empresa AAQA, dedicada a un proyecto de Emprendimiento social.",
    demoLink: "https://ayudandoaquienesayudan.org/convocatoria-abierta-emprendimiento-social/",
  },
  {
    id: 3,
    title: "LaborLab Legal",
    image: laborlab,
    description: "Página web desarrollada para la firma de abogados Laborlab Legal, con varias secciones y formulario de contacto.",
    demoLink: "https://laborlablegal.com/",
  },
  {
    id: 4,
    title: "SinFin",
    image: sinfin,
    description: "Página web desarrollada para la empresa de arquitectura y diseño SinFin, con varios efectos y formulario de contacto.",
    demoLink: "https://sinfininspecciones.com",
  }
]


export const Portafolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portafolio</h1>
      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="demo-button">
                Ver Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
