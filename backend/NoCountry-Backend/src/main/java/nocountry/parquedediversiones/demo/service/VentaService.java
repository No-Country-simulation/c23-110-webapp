package nocountry.parquedediversiones.demo.service;

import nocountry.parquedediversiones.demo.dtos.VentaDTO;
import nocountry.parquedediversiones.demo.entities.Venta;

import java.util.List;

public interface VentaService {
    List<VentaDTO> findAll();
    VentaDTO findById(Long id);
    VentaDTO save(VentaDTO venta);
    VentaDTO update(Long id, VentaDTO ventaDTO);
    void deleteById(Long id);
}
