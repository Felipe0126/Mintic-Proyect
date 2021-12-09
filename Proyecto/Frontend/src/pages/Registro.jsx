import React from 'react';
import NavBarRegistro from '../components/NavBarRegistro';

const Registro = () => {
    return (
        <div>
            <NavBarRegistro/>

            <div className="container">
                <div className="row">
                    <div className="col-12" formsesion>
                        <form action="">
                            <div className="form-floating mb-3">
                                <input className="form-control" type="number" name="id" />
                                <label for="pnombre">Numero de Identificacion:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" name="nombres" />
                                <label for="snombre">Nombres:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" name="apellidos" />
                                <label for="papellido">Apellidos:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" name="email" />
                                <label for="sapellido">Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" name="direccion" />
                                <label for="tacademico">Dirección:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="number" name="telefono" />
                                <label for="telefono">Teléfono:</label>
                            </div>
                            <select className="form-select" id="lugar" name="lugar">
                                    <option value="Elegir" selected="Elegir">Elegir Destino: </option>
                                    <option value="San Andres">San Andres</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Cartagena y Santa Marta">Barranquilla</option>
                                    <option value="Cartagena y Santa Marta">Medellin</option>
                                    <option value="Cartagena y Santa Marta">Cartagena</option>
                                    <option value="Parque del cafe">Santa Marta</option>
                                    <option value="Parque del cafe">Parque del Café</option>
                            </select>
                            <br />
                            <div className="form-floating mb-3">
                                <input className="form-control" type="date" name="fecha de salida" />
                                <label for="fecha de salida">Fecha de Salida:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="date" name="fecha de llegada" />
                                <label for="fecha de llegada">Fecha de Llegada:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" type="number" name="numero de personas" />
                                <label for="numero de personas">Numero de Personas:</label>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Hacer mi Reserva </button>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registro