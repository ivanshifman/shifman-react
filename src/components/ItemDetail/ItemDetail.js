import './itemDetail.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCount } from '../../hooks/useCount';

const ItemDetail = ({ producto, selectedImage, onImageClick }) => {

    const { incremento, decremento, numero } = useCount(1, 1, producto.stock)

    return (
        <>
            <article className='contenedor-imagenes'>
                <div className='contenedor-imagen'>
                <img className='imagen-principal' src={selectedImage || producto.imagen.img1} alt={producto.titulo} />
                </div>
                <div className='contenedor-imagenes-opcion'>
                    <img className={`imagen-opcion ${!selectedImage || selectedImage === producto.imagen.img1 ? 'selected' : ''}`} src={producto.imagen.img1} alt={producto.titulo} onClick={() => onImageClick(producto.imagen.img1)}/>
                    <img className={`imagen-opcion ${selectedImage === producto.imagen.img2 ? 'selected' : ''}`} src={producto.imagen.img2} alt={producto.titulo} onClick={() => onImageClick(producto.imagen.img2)}/>
                    <img className={`imagen-opcion ${selectedImage === producto.imagen.img3 ? 'selected' : ''}`} src={producto.imagen.img3} alt={producto.titulo} onClick={() => onImageClick(producto.imagen.img3)}/>
                </div>
            </article>

            <article className='contenedor-detalles-producto'>
                <div className='contenedor-detalles-desc'>
                    <h2>{producto.titulo}</h2>
                    <p>{producto.descripcion}</p>
                    <span>$ {producto.precio}</span>
                </div>
                <div className='contenedor-cantidad'>
                    <div className='contador-producto'>
                        <button className='boton-cantidad' onClick={decremento}><span>-</span></button>
                        <span className='numero-producto'>{numero}</span>
                        <button className='boton-cantidad' onClick={incremento}><span>+</span></button>
                    </div>
                    <button className='boton-compra'><span><ShoppingCartIcon className='icono-carrito-detalle' /></span>Agregar al carrito</button>
                </div>
            </article>
        </>
    )
}

export default ItemDetail
