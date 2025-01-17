package nocountry.parquedediversiones.demo.entities;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigDecimal;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "entradas")
public class Entradas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long id;

    private int cantidad;
    private BigDecimal precioTotal;

    @ManyToOne
    @JoinColumn(name = "juego_id", nullable = false)
    private Juegos juego;

    @ManyToOne
    @JoinColumn(name = "venta_id")
    private Venta venta;
}