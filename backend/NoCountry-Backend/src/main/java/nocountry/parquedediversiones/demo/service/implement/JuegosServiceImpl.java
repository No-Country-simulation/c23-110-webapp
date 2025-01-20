package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.dtos.JuegosDTO;
import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.repository.JuegosRepository;
import nocountry.parquedediversiones.demo.service.JuegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JuegosServiceImpl implements JuegoService {

    @Autowired
    private JuegosRepository juegosRepository;

    @Override
    public List<JuegosDTO> findAll() {
        return juegosRepository.findAll()
                .stream()
                .map(juegos -> new JuegosDTO(
                        juegos
                )).collect(Collectors.toList());
    }

    @Override
    public JuegosDTO findById(Long id) {
        Juegos juegos = juegosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Juego no encontrado con id: " + id));
        return new JuegosDTO(juegos);
    }

    @Override
    public Juegos save(JuegosDTO juegosDTO) {
        Juegos juegos = new Juegos();

        juegos.setNombre(juegosDTO.getNombre());
        juegos.setHorario(juegosDTO.getHorario());
        juegos.setPrecio(juegosDTO.getPrecio());
        juegos.setJuegoActivo(juegosDTO.getJuegoActivo());

        return juegosRepository.save(juegos);
    }

    @Override
    public Juegos update(Long id, JuegosDTO juegosDTO) {

        Juegos updateJuegos = juegosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("No se encontró el juego " + id));

        updateJuegos.setNombre(juegosDTO.getNombre());
        updateJuegos.setHorario(juegosDTO.getHorario());
        updateJuegos.setPrecio(juegosDTO.getPrecio());
        updateJuegos.setJuegoActivo(juegosDTO.getJuegoActivo());

        return juegosRepository.save(updateJuegos);
    }

    @Override
    public void deleteById(Long id) {
        juegosRepository.deleteById(id);
    }
}
