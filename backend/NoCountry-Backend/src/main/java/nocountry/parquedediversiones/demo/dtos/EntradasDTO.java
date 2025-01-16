package nocountry.parquedediversiones.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import nocountry.parquedediversiones.demo.entities.Entradas;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EntradasDTO {

    private Long id;
    private int cantidad;
    private BigDecimal precioTotal;
    private String nombreJuego ;

    public EntradasDTO(Entradas entradas) {
        this.id = entradas.getId();
        this.cantidad = entradas.getCantidad();
        this.precioTotal = entradas.getPrecioTotal();
        this.nombreJuego = entradas.getJuego().getNombre();
    }
}
