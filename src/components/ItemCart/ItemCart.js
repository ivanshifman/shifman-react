import { useContext } from "react";
import "./itemCart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ producto }) => {
  const { removeItem } = useContext(CartContext);

  const handleEliminar = () => {
    removeItem(producto.id);
  };

  if (producto.cantidad > 0) {
    return (
      <div className="producto-cont-cart">
        <img
          className="carrito-producto-imagen"
          src={producto.imagen.img1}
          alt={producto.titulo}
        />
        <div className="carrito-producto-titulo carrito-detalles">
          <small>Título</small>
          <h3>{producto.titulo}</h3>
        </div>
        <div className="carrito-producto-cantidad carrito-detalles">
          <small>Cantidad</small>
          <span className="cantidad">{producto.cantidad}</span>
        </div>
        <div className="carrito-producto-precio carrito-detalles">
          <small>Precio</small>
          <p>${producto.precio}</p>
        </div>
        <div className="carrito-producto-subtotal carrito-detalles">
          <small>Subtotal</small>
          <p>${producto.cantidad * producto.precio}</p>
        </div>
        <button className="carrito-producto-eliminar">
          <DeleteIcon className="producto-eliminar" onClick={handleEliminar} />
        </button>
      </div>
    );
  }
};

export default ItemCart;
