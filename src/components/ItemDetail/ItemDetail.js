import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCount } from "../../hooks/useCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto, selectedImage, onImageClick }) => {
  const { addItem } = useContext(CartContext);
  const { incremento, decremento, cantidad } = useCount(1, 1, producto.stock);
  const [agregado, setAgregado] = useState(false);

  const handleAgregarAlCarrito = () => {
    addItem(producto, cantidad);
    setAgregado(true);
  };

  return (
    <>
      <article className="contenedor-imagenes">
        <div className="contenedor-imagen">
          <img
            className="imagen-principal"
            src={selectedImage || producto.imagen.img1}
            alt={producto.titulo}
          />
        </div>
        <div className="contenedor-imagenes-opcion">
          <img
            className={`imagen-opcion ${
              !selectedImage || selectedImage === producto.imagen.img1
                ? "selected"
                : ""
            }`}
            src={producto.imagen.img1}
            alt={producto.titulo}
            onClick={() => onImageClick(producto.imagen.img1)}
          />
          <img
            className={`imagen-opcion ${
              selectedImage === producto.imagen.img2 ? "selected" : ""
            }`}
            src={producto.imagen.img2}
            alt={producto.titulo}
            onClick={() => onImageClick(producto.imagen.img2)}
          />
          <img
            className={`imagen-opcion ${
              selectedImage === producto.imagen.img3 ? "selected" : ""
            }`}
            src={producto.imagen.img3}
            alt={producto.titulo}
            onClick={() => onImageClick(producto.imagen.img3)}
          />
        </div>
      </article>

      <article className="contenedor-detalles-producto">
        <div className="contenedor-detalles-desc">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <span>$ {producto.precio}</span>
          <small>Stock: {producto.stock}</small>
        </div>
        <div className="contenedor-cantidad">
          {producto.stock > 0 && !agregado && (
            <>
              <div className="contador-producto">
                <button className="boton-cantidad" onClick={decremento}>
                  <span>-</span>
                </button>
                <span className="numero-producto">{cantidad}</span>
                <button className="boton-cantidad" onClick={incremento}>
                  <span>+</span>
                </button>
              </div>
              <button className="boton-compra" onClick={handleAgregarAlCarrito}>
                <span>
                  <ShoppingCartIcon className="icono-carrito-detalle" />
                </span>
                Agregar al carrito
              </button>
            </>
          )}
          {agregado && (
            <div className="contenedor-botones">
              <Link to="/" className="boton-nuevo">
                <button className="boton-compra boton-new-compra">
                  Ir a inicio
                </button>
              </Link>
              <Link to="/cart" className="boton-nuevo">
                <button className="boton-compra boton-new-end">
                  Ir a carrito
                </button>
              </Link>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
