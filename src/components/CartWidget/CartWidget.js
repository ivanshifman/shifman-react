import './cartWidget.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';


const CartWidget = ({ showCartWidget, handleCartWidgetClick }) => {
  return (
    <ul className='lista-dos'>
      <li>
        <a className='contenedor-logo-carrito' href='../public/index.html'>
          <ShoppingBasketIcon className='logo-carrito' />
          <span>0</span>
        </a>
      </li>
      <li className='sub-menu-inicio'>
        <input id="menu-derecha" type="checkbox"></input>
        <label htmlFor="menu-derecha">
          < MenuIcon onClick={handleCartWidgetClick} className='menu-icono-derecha' />
        </label>
        <nav className={`lista-sub-menu ${showCartWidget ? 'active' : ""}`}>
          <ul>
            <li><a onClick={handleCartWidgetClick} className="link-sub-menu" href="../public/index.html">Nuevos productos</a></li>
            <li><a onClick={handleCartWidgetClick} className="link-sub-menu" href="../public/index.html">Popular</a></li>
            <li><a onClick={handleCartWidgetClick} className="link-sub-menu" href="../public/index.html">Consultas</a></li>
          </ul>
        </nav>
      </li>
    </ul>
  )
}

export default CartWidget
