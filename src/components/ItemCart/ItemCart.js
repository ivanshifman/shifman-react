import "./itemCart.css";
import img from "../../assets/acer1a.webp";
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCart = () => {
  return (
    <div className="producto-cont-cart">
      <img className="carrito-producto-imagen" src={img} alt="hola" />
      <div className="carrito-producto-titulo">
        <small>Título</small>
        <h3>holllllllllllllllll titulooooooooooo8888888888888888888888o</h3>
      </div>
      <div className="carrito-producto-cantidad">
        <small>Cantidad</small>
        <div className="carrito-control">
          <button className="carrito-control-boton carrito-control-menos">
            <span className="carrito-control-signo">-</span>
          </button>
          <span className="contador-cantidad">0</span>
          <button className="carrito-control-boton carrito-control-mas">
            <span className="carrito-control-signo">+</span>
          </button>
        </div>
      </div>
      <div className="carrito-producto-precio">
        <small>Precio</small>
        <p>$$1600</p>
      </div>
      <div className="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>$25000</p>
      </div>
      <button className="carrito-producto-eliminar">
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ItemCart;
