package nocountry.parquedediversiones.demo.dtos;

import lombok.*;
import nocountry.parquedediversiones.demo.entities.Entradas;
import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.enums.MetodoEnum;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class VentaDTO {
    private Long id;
    private MetodoEnum metodoDePago;
    private Date fechaDeCompra;
    private Set<EntradasDTO> entradas = new HashSet<>();

    public VentaDTO(Venta venta) {
        this.id = venta.getId();
        this.metodoDePago = venta.getMetodoDePago();
        this.fechaDeCompra = venta.getFechaDeCompra();
        this.entradas = venta.getEntradas().stream()
                .map(entrada -> new EntradasDTO(entrada))
                .collect(Collectors.toSet());
    }
}
