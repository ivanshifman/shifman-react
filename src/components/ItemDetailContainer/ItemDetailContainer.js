import './itemDetailContainer.css';
import UnoImg from '../../assets/acer1a.webp'
import DosImg from '../../assets/acer1b.webp'
import TresImg from '../../assets/acer1c.webp'

const ItemDetailContainer = () => {
    return (
        <div className='contenedor-total-producto'>
            <div className='contenedor-producto'>

                <article className='contenedor-imagenes'>
                    <div className='contenedor-imagen'>
                        <img className='imagen-principal' src={UnoImg} alt='altimg'></img>
                    </div>
                    <div className='contenedor-imagenes-opcion'>
                        <img className='imagen-opcion' src={UnoImg} alt='altimg1'></img>
                        <img className='imagen-opcion' src={DosImg} alt='altimg2'></img>
                        <img className='imagen-opcion' src={TresImg} alt='altimg3'></img>
                    </div>
                </article>

                <article className='contenedor-detalles-producto'>
                    <div className='contenedor-detalles-desc'>
                        <h2>Nombre del producto</h2>
                        <p>Descripcion del producto</p>
                        <span>$ 15000</span>
                    </div>
                    <div className='contenedor-cantidad'>
                        <div className='contador-producto'>
                            <button className='boton-cantidad'><span>-</span></button>
                            <span className='numero-producto'>0</span>
                            <button className='boton-cantidad'><span>+</span></button>
                        </div>
                        <button className='boton-compra'><span>E</span>Agregar al carrito</button>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default ItemDetailContainer
