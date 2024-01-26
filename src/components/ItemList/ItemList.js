import Item from '../Item/Item';
import './itemList.css';
import {useState, useEffect} from 'react'

const ItemList = ({ productos, categoriaId }) => {
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
            setShowTitle(true);
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
