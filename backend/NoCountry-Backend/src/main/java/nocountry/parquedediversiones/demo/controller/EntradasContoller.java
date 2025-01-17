package nocountry.parquedediversiones.demo.controller;

import nocountry.parquedediversiones.demo.dtos.EntradasDTO;
import nocountry.parquedediversiones.demo.entities.Entradas;
import nocountry.parquedediversiones.demo.service.implement.EntradasServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entradas")
public class EntradasContoller {

    @Autowired
    private EntradasServiceImpl entradasService;

    @GetMapping
    public List<EntradasDTO> getAllEntradas() { return entradasService.findAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<EntradasDTO> getJuegosById(@PathVariable Long id) {
        return ResponseEntity.ok(entradasService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Entradas> createEntrada (@RequestBody Entradas entradas) {
        return ResponseEntity.ok(entradasService.save(entradas));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entradas> updateEntrada(@PathVariable Long id, @RequestBody Entradas entradas) {
        return ResponseEntity.ok(entradasService.update(id, entradas));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntrada (@PathVariable Long id) {
        entradasService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}