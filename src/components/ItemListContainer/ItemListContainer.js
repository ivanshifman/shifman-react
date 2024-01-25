import './itemListContainer.css';
import UnoImg from '../../assets/acer1a.webp'

const ItemListContainer = () => {
    return (
        <>
            <div className='contenedor-total-productos'>
                <div className='productos'>
                    <h2>Productos</h2>

                    <div className='producto-contenido'>
                        <article className='producto'>
                            <img src={UnoImg} alt='altimg'></img>
                            <div className='producto-texto'>
                                <h3>notebook ksksk sjsjssk djdjdjdjd djddjdjdjdjdddddddd</h3>
                                <p>Categoria: equipos</p>
                                <p className='precio'>$2000</p>
                                <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                            </div>
                        </article>
                        <article className='producto'>
                            <img src={UnoImg} alt='altimg'></img>
                            <div className='producto-texto'>
                                <h3>notebook ksksk sjsjssk djdjdjdjd djddjdjdjdjdddddddd</h3>
                                <p>Categoria: equipos</p>
                                <p className='precio'>$2000</p>
                                <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                            </div>
                        </article>
                        <article className='producto'>
                            <img src={UnoImg} alt='altimg'></img>
                            <div className='producto-texto'>
                                <h3>notebook ksksk sjsjssk djdjdjdjd djddjdjdjdjdddddddd</h3>
                                <p>Categoria: equipos</p>
                                <p className='precio'>$2000</p>
                                <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                            </div>
                        </article>
                        <article className='producto'>
                            <img src={UnoImg} alt='altimg'></img>
                            <div className='producto-texto'>
                                <h3>notebook ksksk sjsjssk djdjdjdjd djddjdjdjdjdddddddd</h3>
                                <p>Categoria: equipos</p>
                                <p className='precio'>$2000</p>
                                <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                            </div>
                        </article>
                        <article className='producto'>
                            <img src={UnoImg} alt='altimg'></img>
                            <div className='producto-texto'>
                                <h3>notebook ksksk sjsjssk djdjdjdjd djddjdjdjdjdddddddd</h3>
                                <p>Categoria: equipos</p>
                                <p className='precio'>$2000</p>
                                <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                            </div>
                        </article>
                        <article className='producto'>
                            <img src={UnoImg} alt='altimg'></img>
                            <div className='producto-texto'>
                                <h3>notebook ksksk sjsjssk djdjdjdjd djddjdjdjdjdddddddd</h3>
                                <p>Categoria: equipos</p>
                                <p className='precio'>$2000</p>
                                <a className='boton-producto' href='../public/index.html'>Ver detalles</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer