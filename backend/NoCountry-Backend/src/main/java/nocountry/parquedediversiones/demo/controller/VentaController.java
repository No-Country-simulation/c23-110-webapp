package nocountry.parquedediversiones.demo.controller;

import nocountry.parquedediversiones.demo.dtos.VentaDTO;
import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.service.VentaService;
import nocountry.parquedediversiones.demo.service.implement.VentaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ventas")
public class VentaController {

    @Autowired
    private VentaServiceImpl ventaService;

    @GetMapping
    public List<VentaDTO> getAllVentas() {
        return ventaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VentaDTO> getVentaById(@PathVariable Long id) {
        return ResponseEntity.ok(ventaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<VentaDTO> createVenta(@RequestBody VentaDTO ventaDTO) {
        return ResponseEntity.ok(ventaService.save(ventaDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<VentaDTO> updateVenta(@PathVariable Long id, @RequestBody VentaDTO venta) {
        return ResponseEntity.ok(ventaService.update(id, venta));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteVenta(@PathVariable Long id) {
        ventaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

