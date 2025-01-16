package nocountry.parquedediversiones.demo.service;

import nocountry.parquedediversiones.demo.dtos.EntradasDTO;
import nocountry.parquedediversiones.demo.entities.Entradas;

import java.util.List;

public interface EntradasService {
    List<EntradasDTO> findAll();
    EntradasDTO findById(Long id);
    Entradas save (Entradas entradas );
    Entradas update(Long id, Entradas entradas);
    void deleteById(Long id);
}
