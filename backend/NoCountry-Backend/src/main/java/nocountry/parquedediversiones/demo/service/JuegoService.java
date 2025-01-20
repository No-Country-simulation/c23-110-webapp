package nocountry.parquedediversiones.demo.service;

import nocountry.parquedediversiones.demo.dtos.JuegosDTO;
import nocountry.parquedediversiones.demo.entities.Juegos;

import java.util.List;

public interface JuegoService {
    List<JuegosDTO> findAll();
    JuegosDTO findById(Long id);
    Juegos save (JuegosDTO juegosDTO );
    Juegos update(Long id, JuegosDTO juegosDTO);
    void deleteById(Long id);
}
