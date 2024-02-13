import "./cartWidget.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavFilter from "../NavFilter/NavFilter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({
  showCartWidget,
  handleCartWidgetClick,
  isSubMenuInicioVisible,
  closeClick,
}) => {
  const {quantityCart} = useContext(CartContext)
  
  return (
    <ul className="lista-dos">
      <li>
        <Link className="contenedor-logo-carrito" to={`/cart`} onClick={closeClick}>
          <ShoppingBasketIcon className="logo-carrito" />
          <span>{quantityCart()}</span>
        </Link>
      </li>
      {isSubMenuInicioVisible && (
        <li className="sub-menu-inicio">
          <input id="menu-derecha" type="checkbox" />
          <label htmlFor="menu-derecha">
            <MenuIcon
              onClick={handleCartWidgetClick}
              className="menu-icono-derecha"
            />
          </label>
          <NavFilter
            handleCartWidgetClick={handleCartWidgetClick}
            showCartWidget={showCartWidget}
          />
        </li>
      )}
    </ul>
  );
};

export default CartWidget;
