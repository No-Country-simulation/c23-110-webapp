package nocountry.parquedediversiones.demo.controller;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import nocountry.parquedediversiones.demo.dtos.LoginRequest;
import nocountry.parquedediversiones.demo.dtos.LoginResponse;
import nocountry.parquedediversiones.demo.dtos.UserResponse;
import nocountry.parquedediversiones.demo.entities.Usuario;
import nocountry.parquedediversiones.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "https://d65a-2607-fea8-5864-4000-1d9e-5142-70af-802.ngrok-free.app")
@RequiredArgsConstructor
public class UserController {


    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/usuarios")
    @Transactional
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> createUser(@RequestBody Usuario user) {
        if (userRepository.findByNombre(user.getNombre()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("Ya esta en uso el nombre");
        }
        user.setContrasena(passwordEncoder.encode(user.getContrasena()));
        Usuario savedUser = userRepository.save(user);

        UserResponse response = new UserResponse(
                savedUser.getNombre(),
               // savedUser.getEmail(),
                savedUser.getRol().name()
        );
        return ResponseEntity.ok(response);
    }

    @GetMapping("/usuarios")
    @PreAuthorize("hasRole('ADMIN')")
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserResponse(
                        user.getNombre(),
                       // user.getEmail(),
                        user.getRol().name()
                ))
                .collect(Collectors.toList());
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        // Validar que el nombre de usuario y la contraseña no sean nulos
        if (loginRequest.getUsername() == null || loginRequest.getPassword() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new LoginResponse(null, null, "El nombre de usuario y la contraseña no pueden ser nulos"));
        }

        Optional<Usuario> usuarioOpt = userRepository.findByNombre(loginRequest.getUsername());

        if (usuarioOpt.isEmpty() || !passwordEncoder.matches(loginRequest.getPassword(), usuarioOpt.get().getContrasena())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse(null, null, "Credenciales inválidas"));
        }

        Usuario usuario = usuarioOpt.get();

        // Crear una respuesta con el ID y el rol
        LoginResponse response = new LoginResponse(usuario.getId(), usuario.getRol().name(), null);

        return ResponseEntity.ok(response);
    }

}