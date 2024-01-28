import './navBar.css';
import logo from '../../assets/logocom.webp'
import CartWidget from '../CartWidget/CartWidget';
import MenuLista from '../MenuLista/MenuLista';
import HomeIcon from '@mui/icons-material/Home';
import HeadsetIcon from '@mui/icons-material/Headset';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const NavBar = () => {

  const location = useLocation();
  const isSubMenuInicioVisible = ['/', '/categoria/accesorios', '/categoria/equipos'].includes(location.pathname);

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

  const closeClick = () => {
    setShowCartWidget(false);
    setShow(false);
  }

  return (
    <header>
      <nav className='navegacion'>
        <MenuLista show={show} handleClick={handleClick} />
        <Link to={`/`} className='logo-contenedor' onClick={closeClick}>
          <img className='logo' src={logo} alt="logo" />
        </Link>
        <ul className={`lista-uno ${show ? 'active' : ""}`}>
          <li><NavLink className='menu-link' onClick={handleClick} to={`/`}><span><HomeIcon /></span>Inicio</NavLink></li>
          <li><NavLink className='menu-link' onClick={handleClick} to={`/categoria/accesorios`}><span><HeadsetIcon /></span>Accesorios</NavLink></li>
          <li><NavLink className='menu-link' onClick={handleClick} to={`/categoria/equipos`}><span><ComputerIcon /></span>Equipos</NavLink></li>
          <li><NavLink className='menu-link' onClick={handleClick} to={`/contacto`}><span><LocalPhoneIcon /></span>Contacto</NavLink></li>
        </ul>
        <CartWidget showCartWidget={showCartWidget} handleCartWidgetClick={handleCartWidgetClick} isSubMenuInicioVisible={isSubMenuInicioVisible}/>
      </nav>
    </header>
  )
}

export default NavBar
