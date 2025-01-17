package nocountry.parquedediversiones.demo.entities;

import jakarta.persistence.*;
import lombok.*;
import nocountry.parquedediversiones.demo.enums.MetodoEnum;
import org.hibernate.annotations.GenericGenerator;

import java.util.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "venta")
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "usuario_id", nullable = false)
//    private Usuario usuario;

    private MetodoEnum metodoDePago;
    private Date fechaDeCompra;

    @ManyToOne
    @JoinColumn(name = "juego_id", nullable = false)
    private Juegos juego;
}
