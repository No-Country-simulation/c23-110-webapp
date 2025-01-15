package nocountry.parquedediversiones.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nocountry.parquedediversiones.demo.enums.MetodoEnum;
import org.hibernate.annotations.GenericGenerator;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
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
    private int cantidad;
    private Date fechaDeCompra;

    @ManyToMany
    @JoinTable(name = "venta_juego",
                joinColumns = @JoinColumn(name = "venta_id"),
                inverseJoinColumns = @JoinColumn(name = "juego_id"))
    private Set<Juegos> juegos = new HashSet<>();
}
