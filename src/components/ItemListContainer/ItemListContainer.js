import './itemListContainer.css';
import { pedirDatos } from '../../utils/promiseUtils'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
    }, [])


    return (
        <>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer