import React from "react";
import NavBarReservas from "../components/NavBarReservas";

const Reservas = () => {
    return(
        <div>
            <NavBarReservas/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-primary">Actualizar Reserva</button>
                        <button type="button" className="btn btn-primary">Eliminar Reserva</button>
                        <button type="button" className="btn btn-primary">Confirmar Reserva</button>

                        <table className="table alinear">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Telefono</th>
                                    <th>email</th>
                                    <th>Lugar Destino</th>
                                    <th>Fecha Salida</th>
                                    <th>Fecha Llegada</th>
                                    <th># de Personas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>52689321</td>
                                    <td>Sandra </td>
                                    <td>Fernandez Herrera</td>
                                    <td>3124578965</td>
                                    <td>sandra.fernandez@hotmail.com</td>
                                    <td>Medellin</td>
                                    <td> 24-Dic-2021</td>
                                    <td>06-Ene-2022</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>1020809357</td>
                                    <td>Andres </td>
                                    <td>Rodriguez Zapata</td>
                                    <td>3102639875</td>
                                    <td>andres.zapata@hotmail.com</td>
                                    <td>Santa Marta</td>
                                    <td> 31-Dic-2021</td>
                                    <td>15-Ene-2022</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="dp-flex justify-content center padding-top 17px">
                <input type="number" id="NumId" name="NumId" placeholder="N° Identificacion" />
                <input type="submit" id="buscarNumId" name="buscarNumId" value="Buscar"/><br/><br />
            </div>

        </div>
    )
}

export default Reservas