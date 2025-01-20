package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.dtos.VentaDTO;
import nocountry.parquedediversiones.demo.entities.Entradas;
import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.repository.EntradasRespository;
import nocountry.parquedediversiones.demo.repository.VentaRepository;
import nocountry.parquedediversiones.demo.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;
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
    public Venta save(VentaDTO ventaDTO) {
        Venta venta = new Venta();
        venta.setMetodoDePago(ventaDTO.getMetodoDePago());
        venta.setFechaDeCompra(LocalDateTime.now());

        Set<Entradas> guardarEntradas = ventaDTO.getEntradas()
                .stream().map(
                        entradasDTO -> {
                            Optional<Entradas> entradasOpt = entradasRespository.findById(entradasDTO.getId());
                            if (entradasOpt.isPresent()) {
                                return entradasOpt.get();
                            } else {
                                throw new RuntimeException("Entrada no encontrada con ID: "+entradasDTO.getId());
                            }
                        }
                ).collect(Collectors.toSet());
        venta.setEntradas(guardarEntradas);

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
