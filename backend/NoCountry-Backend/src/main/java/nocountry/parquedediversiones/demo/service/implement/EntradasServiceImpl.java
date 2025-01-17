package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.dtos.EntradasDTO;
import nocountry.parquedediversiones.demo.entities.Entradas;
import nocountry.parquedediversiones.demo.repository.EntradasRespository;
import nocountry.parquedediversiones.demo.service.EntradasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EntradasServiceImpl implements EntradasService {

    @Autowired
    private EntradasRespository entradasRespository;

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
    public Entradas save(Entradas entradas) {
        return entradasRespository.save(entradas);
    }

    @Override
    public Entradas update(Long id, Entradas entradas) {
/*        updateEntrada.setCantidad(entradas.getCantidad());
        updateEntrada.setJuego(entradas.getJuego());
        updateEntrada.setVenta(entradas.getVenta());*/

        return /*entradasRespository.save(updateEntrada)*/null;
    }

    @Override
    public void deleteById(Long id) {
        entradasRespository.deleteById(id);
    }
}
