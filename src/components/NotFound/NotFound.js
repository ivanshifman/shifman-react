import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found">
        <div className="not-found-404">
            <h3>Oops ! Página no encontrada</h3>
            <h2><span>4<span><span>0</span></span>4</span></h2>
        </div>
        <p>Lo sentimos, el sitio no fue encontrado</p>
        <Link className="not-found-volver" to={`/`}>Volver a inicio</Link>
      </div>
    </div>
  )
}

export default NotFound
