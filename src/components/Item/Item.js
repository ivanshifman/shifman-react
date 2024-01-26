import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <>
            <article className='producto'>
                <img src={producto.imagen.img1} alt={producto.titulo}></img>
                <div className='producto-texto'>
                    <h3>{producto.titulo}</h3>
                    <p>Categoria: {producto.categoria}</p>
                    <p className='precio'>${producto.precio}</p>
                    <Link className='boton-producto' to={`/item/${producto.id}`}>Ver detalles</Link>
                </div>
            </article>
        </>
    )
}

export default Item
