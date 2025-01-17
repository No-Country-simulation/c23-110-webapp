package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.dtos.VentaDTO;
import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.repository.VentaRepository;
import nocountry.parquedediversiones.demo.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VentaServiceImpl implements VentaService {

    @Autowired
    private VentaRepository ventaRepository;

    @Override
    public List<VentaDTO> findAll() {

        return ventaRepository.findAll()
                .stream()
                .map(venta -> new VentaDTO(
                        venta
                )).collect(Collectors.toList());
    }

    @Override
    public Venta findById(Long id) {
        return ventaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Venta no encontrada con ID: " + id));
    }

    @Override
    public Venta save(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    public Venta update(Long id, Venta venta) {
        Venta existingVenta = findById(id);

        existingVenta.setMetodoDePago(venta.getMetodoDePago());
        existingVenta.setHoraDeVenta(venta.getHoraDeVenta());
        existingVenta.setVentaTotal(venta.getVentaTotal());
        existingVenta.setJuego(venta.getJuego());

        return ventaRepository.save(existingVenta);
    }

    @Override
    public void deleteById(Long id) {
        ventaRepository.deleteById(id);
    }
}
