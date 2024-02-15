import "./cartWidget.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({ closeClick }) => {
  const { quantityCart } = useContext(CartContext);

  return (
    <ul className="lista-dos">
      <li>
        <Link
          className="contenedor-logo-carrito"
          to={`/cart`}
          onClick={closeClick}
        >
          <ShoppingBasketIcon className="logo-carrito" />
          <span>{quantityCart()}</span>
        </Link>
      </li>
    </ul>
  );
};

export default CartWidget;
