package nocountry.parquedediversiones.demo.service;

import nocountry.parquedediversiones.demo.dtos.EntradasDTO;
import nocountry.parquedediversiones.demo.entities.Entradas;

import java.util.List;

public interface EntradasService {
    List<EntradasDTO> findAll();
    EntradasDTO findById(Long id);
    Entradas save (EntradasDTO  entradasDTO);
    Entradas update(Long id, EntradasDTO entradasDTO);
    void deleteById(Long id);
}
