import './itemListContainer.css';
import { pedirDatos } from '../../utils/promiseUtils'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {categoriaId} = useParams()


    useEffect(() => {
        pedirDatos(categoriaId)
            .then((res) => {
                setProductos(res);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoriaId]);


    return (
        <>
            <ItemList productos={productos} categoriaId={categoriaId}/>
        </>
    )
}

export default ItemListContainer