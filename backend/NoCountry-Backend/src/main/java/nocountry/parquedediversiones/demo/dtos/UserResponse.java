package nocountry.parquedediversiones.demo.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserResponse {
    private String nombre;
    private String email;
    private String rol;
}
