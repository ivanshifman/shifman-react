import './item.css';

const Item = ({ producto }) => {
    return (
        <>
            <article className='producto'>
                <img src={producto.imagen.img1} alt={producto.titulo}></img>
                <div className='producto-texto'>
                    <h3>{producto.titulo}</h3>
                    <p>Categoria: {producto.categoria}</p>
                    <p className='precio'>${producto.precio}</p>
                    <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                </div>
            </article>
        </>
    )
}

export default Item
