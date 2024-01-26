import './itemDetail.css';

const ItemDetail = ({ producto }) => {
    return (
        <>
            <article className='contenedor-imagenes'>
                <div className='contenedor-imagen'>
                    <img className='imagen-principal' src={producto.imagen.img1} alt={producto.titulo}></img>
                </div>
                <div className='contenedor-imagenes-opcion'>
                    <img className='imagen-opcion' src={producto.imagen.img1} alt={producto.titulo}></img>
                    <img className='imagen-opcion' src={producto.imagen.img2} alt={producto.titulo}></img>
                    <img className='imagen-opcion' src={producto.imagen.img3} alt={producto.titulo}></img>
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
                        <button className='boton-cantidad'><span>-</span></button>
                        <span className='numero-producto'>0</span>
                        <button className='boton-cantidad'><span>+</span></button>
                    </div>
                    <button className='boton-compra'><span>E</span>Agregar al carrito</button>
                </div>
            </article>
        </>
    )
}

export default ItemDetail
