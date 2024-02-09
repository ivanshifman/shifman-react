import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./cart.css";

const Cart = () => {
  return (
    <div className="contenedor-carrito">
      <h2>Carrito</h2>
      <div className="contenedor-cart">
        <div className="carrito">
          <div className="producto-carrito">
            <ItemCart />
          </div>
        </div>
        <div className="aside-carrito">
          <div className="min-aside">
            <div className="p-items-carrito">
              <p>Cantidad de items:</p>
              <span>14</span>
            </div>
          </div>
          <div className="min-aside">
            <div className="p-items-carrito">
              <p>Total</p>
              <span>$15000</span>
            </div>
          </div>
          <div className="botones">
            <button className="comprar">Finalizar compra</button>
            <Link className="boton" to={`/`}>
              <button className="seguir-comprar">Seguir comprando</button>
            </Link>
            <button className="eliminar-carrito">Vaciar carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
