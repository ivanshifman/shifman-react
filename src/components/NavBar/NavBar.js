import './navBar.css';
import logo from '../../assets/logocom.webp'
import CartWidget from '../CartWidget/CartWidget';
import MenuLista from '../MenuLista/MenuLista';
import HomeIcon from '@mui/icons-material/Home';
import HeadsetIcon from '@mui/icons-material/Headset';
import ComputerIcon from '@mui/icons-material/Computer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useState } from 'react';

const NavBar = () => {

  const [show, setShow] = useState(false)
  const [showCartWidget, setShowCartWidget] = useState(false);

  const handleClick = () => {
    setShow(!show)
    setShowCartWidget(false);
  }

  const handleCartWidgetClick = () => {
    setShowCartWidget(!showCartWidget);
    setShow(false);
  }

  return (
    <header>
      <nav className='navegacion'>
        <MenuLista show = {show} handleClick = {handleClick} />
        <a href='../public/index.html' className='logo-contenedor'>
          <img className='logo' src={logo} alt="logo" />
        </a>
        <ul className={`lista-uno ${show ? 'active' : ""}`}>
          <li><a href='../public/index.html'><span><HomeIcon /></span>Inicio</a></li>
          <li><a href='../public/index.html'><span><HeadsetIcon /></span>Accesorios</a></li>
          <li><a href='../public/index.html'><span><ComputerIcon /></span>Equipos</a></li>
          <li><a href='../public/index.html'><span><VideogameAssetIcon /></span>Videojuegos</a></li>
        </ul>
        <CartWidget showCartWidget = {showCartWidget} handleCartWidgetClick = {handleCartWidgetClick}/>
      </nav>
    </header>

  )
}

export default NavBar