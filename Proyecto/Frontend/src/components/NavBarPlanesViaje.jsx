import React from "react";
import { Link } from "react-router-dom";

const NavBarPlanesViaje = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="nav-brand">Planes de Viaje</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" aria-current="page" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planesviaje" className="nav-link active">Planes de Viaje</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservas" className="nav-link">Hacer reserva</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservas" className="nav-link">Consultar reservas</Link>
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

export default NavBarPlanesViaje