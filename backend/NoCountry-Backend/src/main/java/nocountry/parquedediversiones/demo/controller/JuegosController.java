package nocountry.parquedediversiones.demo.controller;

import nocountry.parquedediversiones.demo.dtos.JuegosDTO;
import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.service.implement.JuegosServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/juegos")
public class JuegosController {

    @Autowired
    private JuegosServiceImpl juegoService;

    @GetMapping
    public List<JuegosDTO> getAllJuegos() {
        return juegoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<JuegosDTO> getJuegosById(@PathVariable Long id) {
        return ResponseEntity.ok(juegoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Juegos> createJuegos(@RequestBody JuegosDTO juegosDTO) {
        return ResponseEntity.ok(juegoService.save(juegosDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Juegos> updateJuegos(@PathVariable Long id, @RequestBody JuegosDTO juegosDTO) {
        return ResponseEntity.ok(juegoService.update(id, juegosDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJuegos(@PathVariable Long id) {
        juegoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

