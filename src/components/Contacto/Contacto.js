import './contacto.css';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HelpIcon from '@mui/icons-material/Help';

const Contacto = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const shouldReset = await showConfirmation();
    console.log(data)

    if (shouldReset) {
      reset();
    }
  });

  const showConfirmation = async () => {
    const result = await Swal.fire({
      title: 'Muchas gracias!!!',
      text: 'Sus datos han sido enviados',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      customClass: {
        icon: 'iconoAlertaUno',
      },
    });

    return result.isConfirmed;
  };


  return (
    <div className='formulario'>
      <div className='contacto-contenedor'>
        <div className='titulo-contacto'>
          <h2>Contacto</h2>
        </div>
        <div className='caja-contacto'>
          <div className='contacto form'>
            <h3>Envía tu mensaje</h3>
            <form onSubmit={onSubmit}>
              <div className='form-contenido'>
                <div className='fila50'>
                  <div className='input-contenido'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' placeholder='Nombre' id='nombre' {...register("nombre",
                      {
                        required: {
                          value: true,
                          message: "Nombre es requerido"
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "Nombre no debe contener números ni espacios"
                        },
                        minLength: {
                          value: 3,
                          message: "Nombre debe tener al menos 3 caracteres"
                        },
                        maxLength: {
                          value: 20,
                          message: "Nombre debe ser menor a 20 caracteres"
                        }
                      })} />
                    {errors.nombre && <span>{errors.nombre.message}</span>}
                  </div>
                  <div className='input-contenido'>
                    <label htmlFor='apellido'>Apellido</label>
                    <input type='text' placeholder='Apellido' id='apellido' {...register("apellido", {
                      required: {
                        value: true,
                        message: "Apellido es requerido"
                      },
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Apellido no debe números ni espacios"
                      },
                      minLength: {
                        value: 3,
                        message: "Apellido debe tener al menos 3 caracteres"
                      },
                      maxLength: {
                        value: 20,
                        message: "Apellido debe ser menor a 20 caracteres"
                      }
                    })} />
                    {errors.apellido && <span>{errors.apellido.message}</span>}
                  </div>
                </div>

                <div className='fila50'>
                  <div className='input-contenido'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Email' id='email' {...register("email", {
                      required: {
                        value: true,
                        message: "Correo es requerido"
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Correo no válido"
                      }
                    })} />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className='input-contenido'>
                    <label htmlFor='numero'>Número</label>
                    <input type='tel' placeholder='Numero' id='numero' {...register("numero", {
                      required: {
                        value: true,
                        message: "Número es requerido"
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Número debe contener solo números"
                      },
                      minLength: {
                        value: 8,
                        message: "Número debe tener al menos 8 caracteres"
                      },
                      maxLength: {
                        value: 15,
                        message: "Número debe ser menor a 15 caracteres"
                      }
                    })} />
                    {errors.numero && <span>{errors.numero.message}</span>}
                  </div>
                </div>

                <div className='fila100'>
                  <div className='input-contenido'>
                    <label htmlFor='mensaje'>Mensaje</label>
                    <textarea id='mensaje' placeholder='Escribe tu mensaje' {...register("mensaje", {
                      required: {
                        value: true,
                        message: "Mensaje es requerido"
                      },
                      minLength: {
                        value: 20,
                        message: "El mensaje debe tener más de 20 caracteres"
                      },
                      maxLength: {
                        value: 220,
                        message: "El mensaje debe tener menos de 220 caracteres"
                      }
                    })}></textarea>
                    {errors.mensaje && <span>{errors.mensaje.message}</span>}
                  </div>
                </div>

                <div className='fila100'>
                  <div className='input-contenido input-boton'>
                    <button type='submit'>Enviar</button>
                  </div>
                </div>

              </div>
            </form>
          </div>
          <div className='contacto info'>
            <h3>Información</h3>
            <div className='info-contenido'>
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
              <ul className='info-redes'>
                <li><i ><FacebookIcon className='facebook' /></i></li>
                <li><i ><TwitterIcon className='twitter' /></i></li>
                <li><i ><InstagramIcon className='instagram' /></i></li>
                <li><i ><WhatsAppIcon className='whatsapp' /></i></li>
              </ul>
            </div>
          </div>
          <div className='contacto info-minimo'>
            <h3>Inconvenientes</h3>
            <div className='info-minimo-contenido'>
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
