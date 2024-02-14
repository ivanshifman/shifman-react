import "./navFilter.css";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

const NavFilter = ({ showCartWidget, handleCartWidgetClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const brandsToShow = {
    equipos: ["acer", "asus", "hp", "lenovo", "noblex", "samsung"],
    accesorios: ["kanji", "ideon", "philips", "jbl"],
  };

  const renderBrands = () => {
    if (isHomePage) {
      return Object.keys(brandsToShow).flatMap(category =>
        brandsToShow[category].map(brand => (
          <label key={brand} htmlFor={brand} className="labelThree">
            <input type="checkbox" id={brand} />
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </label>
        ))
      );
    } else {
      const category = location.pathname.includes("equipos")
        ? "equipos"
        : "accesorios";
      
      return brandsToShow[category].map((brand) => (
        <label key={brand} htmlFor={brand} className="labelThree">
          <input type="checkbox" id={brand} />
          {brand.charAt(0).toUpperCase() + brand.slice(1)}
        </label>
      ));
    }
  };

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
            <article className="availability">{renderBrands()}</article>
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
                $2000 - $4000
              </label>
            </article>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavFilter;
