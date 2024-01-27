import './contacto.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HelpIcon from '@mui/icons-material/Help';

const Contacto = () => {
  return (
    <div className='formulario'>
      <div className='contact-cont'>
        <div className='title'>
          <h2>Contacto</h2>
        </div>
        <div className='box'>
          <div className='contact form'>
            <h3>Envía tu mensaje</h3>
            <form>
              <div className='formBox'>
                <div className='row50'>
                  <div className='inputBox'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' placeholder='Nombre' id='nombre' name='nombre' autoComplete='given-name'/>
                  </div>
                  <div className='inputBox'>
                    <label htmlFor='apellido'>Apellido</label>
                    <input type='text' placeholder='Apellido' id='apellido' name='apellido' autoComplete='family-name'/>
                  </div>
                </div>

                <div className='row50'>
                  <div className='inputBox'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Email' id='email' name='email' autoComplete='email'/>
                  </div>
                  <div className='inputBox'>
                    <label htmlFor='numero'>Número</label>
                    <input type='tel' placeholder='Numero' id='numero' name='numero' autoComplete='tel'/>
                  </div>
                </div>

                <div className='row100'>
                  <div className='inputBox'>
                    <label htmlFor='mensaje'>Mensaje</label>
                    <textarea id='mensaje' placeholder='Escribe tu mensaje' name='mensaje' autoComplete='off' ></textarea>
                  </div>
                </div>

                <div className='row100'>
                  <div className='inputBox inputButton'>
                    <button type='submit'>Enviar</button>
                  </div>
                </div>

              </div>
            </form>
          </div>
          <div className='contact info'>
            <h3>Información</h3>
            <div className='infoBox'>
              <div>
                <span><LocationOnIcon /></span>
                <p>Banfield, Buenos Aires <br />Argentina</p>
              </div>
              <div>
                <span><EmailIcon /></span>
                <p>computronix@gmail.com</p>
              </div>
              <div>
                <span><PhoneForwardedIcon /></span>
                <p>+54 1123456783</p>
              </div>
              <ul className='sci'>
                <li><i ><FacebookIcon className='facebook' /></i></li>
                <li><i ><TwitterIcon className='twitter' /></i></li>
                <li><i ><InstagramIcon className='instagram' /></i></li>
                <li><i ><WhatsAppIcon className='whatsapp' /></i></li>
              </ul>
            </div>
          </div>
          <div className='contact map'>
            <h3>Inconvenientes</h3>
            <div className='mapBox'>
              <div>
                <span><HelpIcon /></span>
                <p>Para cancelaciones, soportecompu@gmail.com</p>
              </div>
              <div>
                <span><HelpIcon /></span>
                <p>Ante demoras, pedidocompu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
