import React from "react";
import { Link } from "react-router-dom";

const NavBarReservas = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/reservas" className="navbar-brand">Consultar Reservas</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/planesviaje" className="nav-link">Planes De Viaje</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/usuario" className="nav-link">Hacer Reserva</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/reservas" className="nav-link active">Consultar Reservas</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Buscar"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <span class="navbar-text ms-auto">Viajemos por Colombia.</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBarReservas