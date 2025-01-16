package nocountry.parquedediversiones.demo.dtos;

import lombok.*;
import nocountry.parquedediversiones.demo.entities.Juegos;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JuegosDTO {
    private Long id;
    private String nombre;
    private String horario;
    private BigDecimal precio;

    public JuegosDTO(Juegos juegos) {
        this.id = juegos.getId();
        this.nombre = juegos.getNombre();
        this.horario = juegos.getHorario();
        this.precio = juegos.getPrecio();
    }
}
