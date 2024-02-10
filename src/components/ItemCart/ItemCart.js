import "./itemCart.css";
import img from "../../assets/acer1a.webp";
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCart = () => {
  return (
    <div className="producto-cont-cart">
      <img className="carrito-producto-imagen" src={img} alt="hola" />
      <div className="carrito-producto-titulo carrito-detalles">
        <small>Título</small>
        <h3>holllllllllllllllll tituloooo ooooooo888888888 8888888888888o fgdhdhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhh</h3>
      </div>
      <div className="carrito-producto-cantidad carrito-detalles">
        <small>Cantidad</small>
        <span className="cantidad">0</span>
      </div>
      <div className="carrito-producto-precio carrito-detalles">
        <small>Precio</small>
        <p>$1600</p>
      </div>
      <div className="carrito-producto-subtotal carrito-detalles">
        <small>Subtotal</small>
        <p>$25000</p>
      </div>
      <button className="carrito-producto-eliminar">
        <DeleteIcon className="producto-eliminar"/>
      </button>
    </div>
  );
};

export default ItemCart;
