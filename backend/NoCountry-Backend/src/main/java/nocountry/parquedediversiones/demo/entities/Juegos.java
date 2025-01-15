package nocountry.parquedediversiones.demo.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigDecimal;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "juegos")
public class Juegos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private String nombre;
    private String horario;
    private BigDecimal precio;

    @ManyToMany(mappedBy = "juegos")
    private Set<Venta> ventas;
}
