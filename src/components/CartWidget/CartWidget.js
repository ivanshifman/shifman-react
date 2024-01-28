import './cartWidget.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import NavFilter from '../NavFilter/NavFilter';

const CartWidget = ({ showCartWidget, handleCartWidgetClick, isSubMenuInicioVisible }) => {
  return (
    <ul className='lista-dos'>
      <li>
        <Link className='contenedor-logo-carrito' to={`/`}>
          <ShoppingBasketIcon className='logo-carrito' />
          <span>0</span>
        </Link>
      </li>
      {isSubMenuInicioVisible &&
        <li className='sub-menu-inicio'>
          <input id="menu-derecha" type="checkbox" />
          <label htmlFor="menu-derecha">
            < MenuIcon onClick={handleCartWidgetClick} className='menu-icono-derecha' />
          </label>
          <NavFilter handleCartWidgetClick={handleCartWidgetClick} showCartWidget={showCartWidget} />
        </li>}

    </ul>
  )
}

export default CartWidget
