import React from "react";
import { Link } from "react-router-dom";
import NavBarInicio from "../components/NavBarInicio";

const inicio = () => {
    return(
        <div>
            <NavBarInicio/>
            <div class="container">
                <div class="row">
                    <div className="col-12 center">
                        <nav></nav>
                        <p>
                        <h1>¡¡Bienvenido!! a "Viajemos por Colombia"</h1>
                        </p>
                        <Link to="/planesviaje" className="btn btn-primary">Planes De Viaje</Link>
                        <Link to="/reservas" className="btn btn-primary">Reservas</Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default inicio