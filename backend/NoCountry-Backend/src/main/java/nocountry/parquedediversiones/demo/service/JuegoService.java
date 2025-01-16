package nocountry.parquedediversiones.demo.service;

import nocountry.parquedediversiones.demo.dtos.JuegosDTO;
import nocountry.parquedediversiones.demo.entities.Juegos;

import java.util.List;

public interface JuegoService {
    List<JuegosDTO> findAll();
    JuegosDTO findById(Long id);
    Juegos save (Juegos juegos );
    Juegos update(Long id, Juegos juegos);
    void deleteById(Long id);
}
