import './itemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="contenedor-titulo">
            <h1>{greeting}</h1>
            <p>Tu servicio de confianza</p>
        </div>
    )
}

export default ItemListContainer
