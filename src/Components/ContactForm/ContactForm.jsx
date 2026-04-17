import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <div className="contact" id="contact">
        <h1>Contacto</h1>
        <div className="contact-container">
            <div className="contact-info">
                <div className="info-content">
                                    <i className="fas fa-usercircle icon"></i>
                    <h2>INFORMACIÓN DE CONTACTO</h2>
                    <p>
                        <i className="fas fa-envelope"></i>
                        marvincalles02@gmail.com
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>
                        +503 7222-9294
                    </p>
                </div>
            </div>

            <div className="contact-form">
                <h2>Envía tu mensaje</h2>
                <form action="https://formspree.io/f/manjbqjb" method="POST">
                    <input type="text" name="name" placeholder="Nombres" required/>
                    <input type="email" name="email" placeholder="Correo Electrónico" required />
                    <textarea name="message" id="" placeholder="Mensaje" required></textarea>
                    <button type="submit" className="contact-form">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    </div>
  )
}
