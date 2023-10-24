import { ChevronRigth, Instagram, Mail, MapPin, MasterCard, PayPal, Phone, VisaCard, Whatsapp } from './Icons'

export function Footer () {
  return (
    <footer className='principal-footer'>

      <div className='wrapper footer-grid'>

        <article className='footer-info-container payments'>
          <h3 className='footer-h3'>Medios de pago</h3>
          <div className='footer-icons-container'>
            <VisaCard />
            <MasterCard />
            <PayPal />
          </div>
        </article>

        <article className='footer-info-container shipments'>
          <h3 className='footer-h3'>Medios de envío</h3>
          <div className='footer-icons-container'>
            <p>Andreani</p>
          </div>
        </article>

        <article className='footer-info-container social-media'>
          <h3 className='footer-h3'>Nuestras redes sociales</h3>
          <div className='footer-icons-container'>
            <Instagram />
            <Whatsapp />
          </div>
        </article>

        <article className='footer-info-container contact'>
          <h3 className='footer-h3'>Contacto</h3>
          <div className='footer-icons-container'>

            <span>
              <Mail />
              lentesmonaco@gmail.com
            </span>
            <span>
              <Phone />
              +5492634803285
            </span>
            <span>
              <MapPin />
              San Martin, Mdz
            </span>
            <span>
              <ChevronRigth />
              Botón de arrepentimiento
            </span>
          </div>
        </article>
      </div>

    </footer>
  )
}
