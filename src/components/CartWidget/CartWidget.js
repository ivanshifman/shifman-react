import './cartWidget.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const CartWidget = ({ showCartWidget, handleCartWidgetClick }) => {
  return (
    <ul className='lista-dos'>
      <li>
        <Link className='contenedor-logo-carrito' to={`/`}>
          <ShoppingBasketIcon className='logo-carrito' />
          <span>0</span>
        </Link>
      </li>
      <li className='sub-menu-inicio'>
        <input id="menu-derecha" type="checkbox"></input>
        <label htmlFor="menu-derecha">
          < MenuIcon onClick={handleCartWidgetClick} className='menu-icono-derecha' />
        </label>
        <nav className={`lista-sub-menu ${showCartWidget ? 'active' : ""}`}>
          <ul>
            <li><Link onClick={handleCartWidgetClick} className="link-sub-menu" to={`/`}>Productos</Link></li>
            <li><Link onClick={handleCartWidgetClick} className="link-sub-menu" to={`/`}>Consultas</Link></li>
          </ul>
        </nav>
      </li>
    </ul>
  )
}

export default CartWidget
