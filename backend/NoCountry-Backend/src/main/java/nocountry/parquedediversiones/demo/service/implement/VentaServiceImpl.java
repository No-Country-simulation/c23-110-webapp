package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.dtos.VentaDTO;
import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.repository.EntradasRespository;
import nocountry.parquedediversiones.demo.repository.VentaRepository;
import nocountry.parquedediversiones.demo.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VentaServiceImpl implements VentaService {

    @Autowired private VentaRepository ventaRepository;
    @Autowired private EntradasRespository entradasRespository;

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
        // Configurar la relación entre Venta y Entradas
        venta.getEntradas().forEach(entrada -> entrada.setVenta(venta));

        // Calcular el precio total
        BigDecimal precioTotal = venta.getEntradas().stream()
                .map(entrada -> Optional.ofNullable(entrada.getPrecioTotal()).orElse(BigDecimal.ZERO))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        venta.setPrecioTotalVenta(precioTotal);

        // Guardar la venta
        return ventaRepository.save(venta);
    }

    @Override
    public Venta update(Long id, Venta venta) {
        Venta existingVenta = findById(id);

        existingVenta.setMetodoDePago(venta.getMetodoDePago());
        existingVenta.setFechaDeCompra(venta.getFechaDeCompra());
        existingVenta.setPrecioTotalVenta(venta.getPrecioTotalVenta());
        existingVenta.setEntradas(venta.getEntradas());

        return ventaRepository.save(existingVenta);
    }

    @Override
    public void deleteById(Long id) {
        ventaRepository.deleteById(id);
    }
}
