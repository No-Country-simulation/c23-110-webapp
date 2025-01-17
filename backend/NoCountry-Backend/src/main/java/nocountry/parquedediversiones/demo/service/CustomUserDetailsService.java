package nocountry.parquedediversiones.demo.service;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.User;
import nocountry.parquedediversiones.demo.entities.Usuario;
import nocountry.parquedediversiones.demo.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {


    private final UserRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByNombre(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        return User.builder()
                .username(usuario.getNombre())
                .password(usuario.getContrasena())
                .roles(usuario.getRol().name()) // Rol de usuario
                .build();
    }
}
