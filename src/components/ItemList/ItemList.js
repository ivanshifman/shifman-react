import Item from '../Item/Item';
import './itemList.css';
import {useState, useEffect} from 'react'

const ItemList = ({ productos }) => {
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='contenedor-total-productos'>
            <div className='productos'>
                {showTitle && <h2>Productos</h2>}

                <div className='producto-contenido'>
                    {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
                </div>
            </div>
        </div>
    );
}

export default ItemList;
