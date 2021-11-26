package com.example.Backend.models;
import org.springframework.data.annotation.Id;

public class ClienteModel {
    @Id
    private String id;

    private String destino;
    private Long precio;
    private String hospedaje;
    private String direccion;
    private String Contacto;
    
    public ClienteModel() {
    }

    public ClienteModel(String id, String destino, Long precio, String hospedaje, String direccion, String contacto) {
        this.id = id;
        this.destino = destino;
        this.precio = precio;
        this.hospedaje = hospedaje;
        this.direccion = direccion;
        this.Contacto = contacto;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public Long getPrecio() {
        return precio;
    }

    public void setPrecio(Long precio) {
        this.precio = precio;
    }

    public String getHospedaje() {
        return hospedaje;
    }

    public void setHospedaje(String hospedaje) {
        this.hospedaje = hospedaje;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getContacto() {
        return Contacto;
    }

    public void setContacto(String contacto) {
        Contacto = contacto;
    }
}