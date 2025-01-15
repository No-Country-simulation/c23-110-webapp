package nocountry.parquedediversiones.demo.controller;

import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    @GetMapping
    public List<Venta> getAllVentas() {
        return ventaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> getVentaById(@PathVariable Long id) {
        return ResponseEntity.ok(ventaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Venta> createVenta(@RequestBody Venta venta) {
        return ResponseEntity.ok(ventaService.save(venta));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Venta> updateVenta(@PathVariable Long id, @RequestBody Venta venta) {
        return ResponseEntity.ok(ventaService.update(id, venta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVenta(@PathVariable Long id) {
        ventaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

