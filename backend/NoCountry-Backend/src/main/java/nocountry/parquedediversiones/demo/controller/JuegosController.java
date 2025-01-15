package nocountry.parquedediversiones.demo.controller;

import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.service.JuegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/juegos")
public class JuegosController {

    @Autowired
    private JuegoService juegoService;

    @GetMapping
    public List<Juegos> getAllJuegos() {
        return juegoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Juegos> getJuegosById(@PathVariable Long id) {
        return ResponseEntity.ok(juegoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Juegos> createJuegos(@RequestBody Juegos juegos) {
        return ResponseEntity.ok(juegoService.save(juegos));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Juegos> updateJuegos(@PathVariable Long id, @RequestBody Juegos juegos) {
        return ResponseEntity.ok(juegoService.update(id, juegos));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJuegos(@PathVariable Long id) {
        juegoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

