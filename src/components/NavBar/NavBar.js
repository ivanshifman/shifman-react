import './navBar.css';
import logo from '../../assets/logocom.webp'
import CartWidget from '../CartWidget/CartWidget';
import MenuLista from '../MenuLista/MenuLista';

const NavBar = () => {
  return (
    <header>
      <nav className='navegacion'>
        <MenuLista />
        <a href='../public/index.html' className='logo-contenedor'>
          <img className='logo' src={logo} alt="logo" />
        </a>
        <ul className='lista-uno'>
          <li><a href='../public/index.html'>Accesorios</a></li>
          <li><a href='../public/index.html'>Computadoras</a></li>
          <li><a href='../public/index.html'>Consolas</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>

  )
}

export default NavBar
