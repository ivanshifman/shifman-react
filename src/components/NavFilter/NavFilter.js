import "./navFilter.css";
import CloseIcon from "@mui/icons-material/Close";

const NavFilter = ({ showCartWidget, handleCartWidgetClick }) => {
  return (
    <>
      <nav className={`menuFilter ${showCartWidget ? "active" : ""}`}>
        <label htmlFor="filterSide">
          <CloseIcon
            onClick={handleCartWidgetClick}
            className="closeCross"
            id="filterSide"
          />
        </label>
        <div className="choiceFilter">
          <h3 className="filterWord">Filtro</h3>
          <div className="sectionAvailability">
            <h3 className="titleAvailability">Marca</h3>
            <article className="availability">
              <label htmlFor="acer" className="labelOne">
                <input type="checkbox" id="acer" />
                Acer
              </label>
              <label htmlFor="asus" className="labelTwo">
                <input type="checkbox" id="asus" />
                Asus
              </label>
              <label htmlFor="hp" className="labelThree">
                <input type="checkbox" id="hp" />
                HP
              </label>
              <label htmlFor="lenovo" className="labelThree">
                <input type="checkbox" id="lenovo" />
                Lenovo
              </label>
              <label htmlFor="samsung" className="labelThree">
                <input type="checkbox" id="samsung" />
                Samsung
              </label>
              <label htmlFor="noblex" className="labelThree">
                <input type="checkbox" id="noblex" />
                Noblex
              </label>
              <label htmlFor="ideon" className="labelThree">
                <input type="checkbox" id="ideon" />
                Ideon
              </label>
              <label htmlFor="kanji" className="labelThree">
                <input type="checkbox" id="kanji" />
                Kanji
              </label>
              <label htmlFor="philips" className="labelThree">
                <input type="checkbox" id="philips" />
                Philips
              </label>
              <label htmlFor="jbl" className="labelThree">
                <input type="checkbox" id="jbl" />
                JBL
              </label>
            </article>
          </div>
          <div className="sectionPricing">
            <h3 className="titlePricing">Precios</h3>
            <article className="pricing">
              <label htmlFor="minimo" className="priceOne">
                <input type="checkbox" id="minimo" />
                $100 - $1000
              </label>
              <label htmlFor="medio" className="priceTwo">
                <input type="checkbox" id="medio" />
                $1000 - $2000
              </label>
              <label htmlFor="maximo" className="priceThree">
                <input type="checkbox" id="maximo" />
                $2000 - $5000
              </label>
            </article>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavFilter;
