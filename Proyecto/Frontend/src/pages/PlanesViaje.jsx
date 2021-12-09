import React from 'react';
import { Link } from 'react-router-dom';
import NavBarPlanesViaje from '../components/NavBarPlanesViaje';

const PlanesViaje = () => {
    return (
        <div>
            <NavBarPlanesViaje/>
        
            <div class="container">
                <div class="row">
                    <div className="col-12">
                        <nav></nav>
                        <p>
                        <h1>Planes de Viaje</h1>
                        </p>
                        <Link to="/reservas" className="btn btn-primary">Consultar Reservas</Link>
                        <Link to="/registro" className="btn btn-primary">Registrarse</Link> 
                        <Link to="/usuario" className="btn btn-primary">Ya soy Usuario</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlanesViaje
