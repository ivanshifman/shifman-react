import './menuLista.css';
import ListIcon from '@mui/icons-material/List';

const MenuLista = () => {
  return (
    <div className='contenedor-menu-icono'>
      <input id="menu-izquierda" type="checkbox" />
        <label htmlFor="menu-izquierda">
            <ListIcon className='menu-icono-izquierda'/>
        </label>
    </div>
  )
}

export default MenuLista
