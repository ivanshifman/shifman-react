import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const { carrito, quantityCart, total, clearCart } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="contenedor-carrito">
        <h2>Carrito</h2>
        <div className="carrito-vacio-cont">
          <p className="p-vacio">
            No hay productos en tu carrito{" "}
            <RemoveShoppingCartIcon className="p-vacio" />
          </p>
          <Link to={`/`}>
            <button className="b-vacio">Elegir productos</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="contenedor-carrito">
      <h2>Carrito</h2>
      <div className="contenedor-cart">
        <div className="carrito">
          {carrito.map((producto) => (
            <div key={producto.id} className="producto-carrito">
              <ItemCart producto={producto} />
            </div>
          ))}
        </div>
        <div className="aside-carrito">
          <div className="min-aside">
            <div className="p-items-carrito">
              <p>Cantidad de items:</p>
              <span>{quantityCart()}</span>
            </div>
          </div>
          <div className="min-aside">
            <div className="p-items-carrito">
              <p>Total:</p>
              <span>${total()}</span>
            </div>
          </div>
          <div className="botones">
            <Link className="boton" to={`/checkout`}>
              <button className="comprar">Finalizar compra</button>
            </Link>
            <Link className="boton" to={`/`}>
              <button className="seguir-comprar">Seguir comprando</button>
            </Link>
            <button onClick={clearCart} className="eliminar-carrito">
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
