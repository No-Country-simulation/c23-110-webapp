package nocountry.parquedediversiones.demo.entities;

import jakarta.persistence.*;
import lombok.*;
import nocountry.parquedediversiones.demo.enums.MetodoEnum;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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
    private LocalDateTime fechaDeCompra;
    private BigDecimal precioTotalVenta;

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Entradas> entradas = new HashSet<>();

}
