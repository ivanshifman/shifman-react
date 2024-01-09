import './cartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';


const CartWidget = () => {
  return (
    <ul className='lista-dos'>
      <li>
        <a href='../public/index.html'>
          <ShoppingCartIcon className='logo-carrito' />
          <span>0</span>
        </a>
      </li>
      <li>
        <input id="menu-derecha" type="checkbox"></input>
        <label for="menu-derecha">
          < MenuIcon className='menu-icono-derecha' />
        </label>
        <nav class="lista-sub-menu">
          <ul>
            <li><a class="link-sub-menu" href="../public/index.html">Inicio<span>👈</span></a></li>
            <li><a class="link-sub-menu" href="../public/index.html">Nuevos productos<span>👈</span></a></li>
            <li><a class="link-sub-menu" href="../public/index.html">Popular<span>👈</span></a></li>
          </ul>
        </nav>
      </li>
    </ul>
  )
}

export default CartWidget
