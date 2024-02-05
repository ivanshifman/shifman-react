import "./menuLista.css";

const MenuLista = ({ show, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`icon nav-icon-5 ${show ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuLista;
