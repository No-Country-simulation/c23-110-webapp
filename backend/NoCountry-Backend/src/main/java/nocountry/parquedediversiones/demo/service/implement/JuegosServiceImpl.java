package nocountry.parquedediversiones.demo.service.implement;

import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.repository.JuegosRepository;
import nocountry.parquedediversiones.demo.service.JuegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JuegosServiceImpl implements JuegoService {

    @Autowired
    private JuegosRepository juegosRepository;

    @Override
    public List<Juegos> findAll() {
        return juegosRepository.findAll();
    }

    @Override
    public Juegos findById(Long id) {
        return juegosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Juego no encontrado con id: " + id));
    }

    @Override
    public Juegos save(Juegos juegos) {
        return juegosRepository.save(juegos);
    }

    @Override
    public Juegos update(Long id, Juegos juegos) {
        Juegos updateJuegos = findById(id);
        updateJuegos.setNombre(juegos.getNombre());
        updateJuegos.setHorario(juegos.getHorario());
        updateJuegos.setVentas(juegos.getVentas());
        updateJuegos.setPrecio(juegos.getPrecio());
        return juegosRepository.save(updateJuegos);
    }

    @Override
    public void deleteById(Long id) {
        juegosRepository.deleteById(id);
    }
}
