package nocountry.parquedediversiones.demo.dtos;

import lombok.*;
import nocountry.parquedediversiones.demo.entities.Juegos;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JuegosDTO {
    private Long id;
    private String nombre;
    private String horario;
    private BigDecimal precio;
    private Set<EntradasDTO> entradas = new HashSet<>();

    public JuegosDTO(Juegos juegos) {
        this.id = juegos.getId();
        this.nombre = juegos.getNombre();
        this.horario = juegos.getHorario();
        this.precio = juegos.getPrecio();
        this.entradas = juegos.getEntradas().stream()
                .map(entradas -> new EntradasDTO(entradas))
                .collect(Collectors.toSet());
    }
}
