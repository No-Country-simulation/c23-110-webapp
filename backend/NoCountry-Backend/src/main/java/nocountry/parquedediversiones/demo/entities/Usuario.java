package nocountry.parquedediversiones.demo.entities;

import jakarta.persistence.*;
import lombok.Data;
import nocountry.parquedediversiones.demo.enums.RoleName;

@Entity
@Table(name = "usuarios")
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "rol", nullable = false)
    private RoleName rol;

    @Column(name = "nombre", nullable = false, unique = true)
    private String nombre;

//    @Column(name = "email", nullable = false)
//    private String email;

    @Column(name = "contraseña", nullable = false)
    private String contraseña;

//    @OneToOne(mappedBy = "Usuario")
//    private Venta venta;
}