import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { pedirDatosId } from '../../utils/promiseUtils'
import './itemDetailContainer.css';
import { useParams } from 'react-router-dom';
import {Spinner, SpinnerError} from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const[producto, setProducto] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (newImage) => {
        setSelectedImage(newImage);
    };

    const {itemId} = useParams()

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        pedirDatosId(itemId)
            .then((res) => {
                setProducto(res)
                setIsLoading(false)
                setIsError(false)
            }).catch(error => {
                console.error(error)
                setIsLoading(false)
                setIsError(true)
            })
    }, [itemId, setIsLoading, setIsError])

    if(isLoading) return <Spinner isLoading={isLoading}/>

    if(isError) return <SpinnerError isError={isError}/>

    return (
        <div className='contenedor-total-producto'>
            <div className='contenedor-producto'>
                {producto && <ItemDetail producto={producto} selectedImage={selectedImage} onImageClick={handleImageClick}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer