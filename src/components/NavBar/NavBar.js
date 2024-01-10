import './navBar.css';
import logo from '../../assets/logocom.webp'
import CartWidget from '../CartWidget/CartWidget';
import MenuLista from '../MenuLista/MenuLista';
import HomeIcon from '@mui/icons-material/Home';
import HeadsetIcon from '@mui/icons-material/Headset';
import ComputerIcon from '@mui/icons-material/Computer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const NavBar = () => {
  return (
    <header>
      <nav className='navegacion'>
        <MenuLista />
        <a href='../public/index.html' className='logo-contenedor'>
          <img className='logo' src={logo} alt="logo" />
        </a>
        <ul className='lista-uno'>
          <li><a href='../public/index.html'><span><HomeIcon /></span>Inicio</a></li>
          <li><a href='../public/index.html'><span><HeadsetIcon /></span>Accesorios</a></li>
          <li><a href='../public/index.html'><span><ComputerIcon /></span>Computadoras</a></li>
          <li><a href='../public/index.html'><span><VideogameAssetIcon /></span>Consolas</a></li>
        </ul>
        <CartWidget />
      </nav>
    </header>

  )
}

export default NavBar
