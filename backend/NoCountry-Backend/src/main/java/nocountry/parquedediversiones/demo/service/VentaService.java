package nocountry.parquedediversiones.demo.service;

import nocountry.parquedediversiones.demo.dtos.VentaDTO;
import nocountry.parquedediversiones.demo.entities.Venta;

import java.util.List;

public interface VentaService {
    List<VentaDTO> findAll();
    Venta findById(Long id);
    Venta save(VentaDTO venta);
    Venta update(Long id, Venta venta);
    void deleteById(Long id);
}
