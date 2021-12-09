import React from "react";
import { Link } from "react-router-dom";

const Registro = () => {
    return(
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link to="/registro" className="navbar-brand">Registro</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planesviaje" className="nav-link">Planes De Viaje</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservas" className="nav-link active">Hacer Reserva</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservas" className="nav-link">Consultar Reservas</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Buscar" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <span className="navbar-text ms-auto">Viajemos por Colombia.</span>
            </div>
        </div>
    </nav>
        
    )
}

export default Registro