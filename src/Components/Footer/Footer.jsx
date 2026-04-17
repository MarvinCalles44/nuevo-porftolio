import "./Footer.css";

export const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <hr/>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/marvin-calles-449657247/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/MarvinCalles44" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>

        <p>Copyright {currentYear} elias-calles.com - Todos los derechos reservados</p>
    </footer>
  )
}
