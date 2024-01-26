import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { pedirDatosId } from '../../utils/promiseUtils'
import './itemDetailContainer.css';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const[producto, setProducto] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        pedirDatosId(itemId)
            .then((res) => {
                setProducto(res)
            }).catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className='contenedor-total-producto'>
            <div className='contenedor-producto'>
                {producto && <ItemDetail producto={producto}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer