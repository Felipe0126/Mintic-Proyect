package com.example.Backend.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.example.Backend.models.ClienteModel;
import com.example.Backend.services.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @GetMapping()
    public ArrayList<ClienteModel> obtenerDatos(){
        return  clienteService.obtenerDatos();
    }

    @PostMapping()
    public ClienteModel guardarDatos(@RequestBody ClienteModel cliente){
        
        return clienteService.guardarDatos(cliente);
    }
    
    @DeleteMapping(path = "/{id}")
    public String eliminarDatosPorId(@PathVariable("id") String id){
        boolean resultadoEliminar=this.clienteService.eliminarDatos(id);
        if (resultadoEliminar){
            return "Se eliminó el usuario con id: "+id;
        }else{
            return "No se pudo eliminar el usuario con el id: "+id;
        }
    }
    
    @GetMapping(path = "/{id}")
    public Optional<ClienteModel> obtenerDatosPorId(@PathVariable("id") String id){
        return clienteService.obtenerDatosPorId(id);
    }

    @GetMapping(path = "/destino/{destino}")
    public ArrayList<ClienteModel> clientePorDestino(@PathVariable("destino") String destino){
        return clienteService.obtenerDatosPorDestino(destino);
    }

    @GetMapping(path = "/precio/{precio}")
    public ArrayList<ClienteModel> clientePorPrecio(@PathVariable("precio") Long precio){
        return clienteService.obtenerDatosPorPrecio(precio);
    }

    @GetMapping(path = "/direccion/{direccion}")
    public ArrayList<ClienteModel> clientePorDireccion(@PathVariable("direccion") String direccion){
        return clienteService.obtenerDatosPorDireccion(direccion);
    }

    @GetMapping(path = "/contacto/{contacto}")
    public ArrayList<ClienteModel> clientePorContacto(@PathVariable("contacto") String contacto){
        return clienteService.obtenerDatosPorContacto(contacto);
    }
}