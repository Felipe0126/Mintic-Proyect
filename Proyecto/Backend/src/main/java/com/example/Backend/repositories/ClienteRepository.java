package com.example.Backend.repositories;
import com.example.Backend.models.ClienteModel;
import org.springframework.data.mongodb.repository.*;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends MongoRepository <ClienteModel, String>{
    
}
