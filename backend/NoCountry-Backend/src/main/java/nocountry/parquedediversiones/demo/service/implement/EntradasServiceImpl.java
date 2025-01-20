package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.dtos.EntradasDTO;
import nocountry.parquedediversiones.demo.entities.Entradas;
import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.repository.EntradasRespository;
import nocountry.parquedediversiones.demo.repository.JuegosRepository;
import nocountry.parquedediversiones.demo.service.EntradasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EntradasServiceImpl implements EntradasService {

    @Autowired private EntradasRespository entradasRespository;
    @Autowired private JuegosRepository juegosRepository;

    @Override
    public List<EntradasDTO> findAll() {
        return entradasRespository.findAll()
                .stream()
                .map(entradas -> new EntradasDTO(
                    entradas
                )).collect(Collectors.toList());
    }

    @Override
    public EntradasDTO findById(Long id) {
        Entradas entradas = entradasRespository.findById(id)
                .orElseThrow(() -> new RuntimeException("Entrada no encontrada: " + id));
        return new EntradasDTO(entradas);
    }

    @Override
    public Entradas save(EntradasDTO  entradasDTO) {
        Juegos juego = juegosRepository.findById(entradasDTO.getJuegos().getId())
                .orElseThrow(() -> new RuntimeException("Juego no encontrado con ID: " + entradasDTO.getJuegos().getId()));

        Entradas entradas = new Entradas();
        entradas.setCantidad(entradasDTO.getCantidad());
        entradas.setJuego(juego);
        entradas.setPrecioTotal(juego.getPrecio().multiply(BigDecimal.valueOf(entradas.getCantidad())));

        return entradasRespository.save(entradas);
    }

    @Override
    public Entradas update(Long id, EntradasDTO entradasDTO) {
        Entradas updateEntrada = entradasRespository.findById(id)
                .orElseThrow(() -> new RuntimeException("No se encontró la entrada " + id));

        Juegos juego = juegosRepository.findById(entradasDTO.getJuegos().getId())
                .orElseThrow(() -> new RuntimeException("Juego no encontrado con ID: " + entradasDTO.getJuegos().getId()));

        updateEntrada.setCantidad(entradasDTO.getCantidad());
        updateEntrada.setJuego(juego);
        updateEntrada.setPrecioTotal(juego.getPrecio().multiply(BigDecimal.valueOf(entradasDTO.getCantidad())));

        return entradasRespository.save(updateEntrada);
    }

    @Override
    public void deleteById(Long id) {
        entradasRespository.deleteById(id);
    }
}
