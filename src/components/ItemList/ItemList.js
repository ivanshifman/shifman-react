import Item from '../Item/Item';
import './itemList.css';
import {useState, useEffect} from 'react'

const ItemList = ({ productos, categoriaId }) => {
    const [showTitle, setShowTitle] = useState(false);
    console.log(showTitle)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [categoriaId]);

    return (
        <div className='contenedor-total-productos'>
            <div className='productos'>
                {showTitle && <h2>{categoriaId ? categoriaId : `productos`}</h2>}

                <div className='producto-contenido'>
                    {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
                </div>
            </div>
        </div>
    );
}

export default ItemList;
