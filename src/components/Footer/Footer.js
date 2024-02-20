import "./footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const facebookUrl = "https://www.facebook.com/";
  const instagramUrl = "https://www.instagram.com/";
  const twitterUrl = "https://twitter.com/";
  const whatsappUrl = "https://www.whatsapp.com/";

  return (
    <footer className="footer">
      <div className="redes-footer">
        <Link to={facebookUrl} className="a-redes-footer">
          <FacebookIcon className="icono-redes-footer" />
        </Link>
        <Link to={instagramUrl} className="a-redes-footer">
          <InstagramIcon className="icono-redes-footer" />
        </Link>
        <Link to={twitterUrl} className="a-redes-footer">
          <TwitterIcon className="icono-redes-footer" />
        </Link>
        <Link to={whatsappUrl} className="a-redes-footer">
          <WhatsAppIcon className="icono-redes-footer" />
        </Link>
      </div>

      <ul className="lista-footer">
        <li>
          <Link to={`/`} className="a-seccion-footer">
            Inicio
          </Link>
        </li>
        <li>
          <Link to={`/categoria/accesorios`} className="a-seccion-footer">
            Accesorios
          </Link>
        </li>
        <li>
          <Link to={`/categoria/equipos`} className="a-seccion-footer">
            Equipos
          </Link>
        </li>
        <li>
          <Link to={`/contacto`} className="a-seccion-footer">
            Contacto
          </Link>
        </li>
      </ul>

      <p className="copy-footer">© 2024 Iván Shifman</p>
    </footer>
  );
};

export default Footer;
