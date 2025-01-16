package nocountry.parquedediversiones.demo.controller;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import nocountry.parquedediversiones.demo.dtos.LoginRequest;
import nocountry.parquedediversiones.demo.dtos.UserResponse;
import nocountry.parquedediversiones.demo.entities.Usuario;
import nocountry.parquedediversiones.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "https://cbec-2607-fea8-5864-4000-f0c3-2a2d-d199-6dbc.ngrok-free.app")
@RequiredArgsConstructor
public class UserController {


    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/usuarios")
    @Transactional
    public ResponseEntity<?> createUser(@RequestBody Usuario user) {
        if (userRepository.findByNombre(user.getNombre()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("Ya esta en uso el nombre");
        }
        user.setContraseña(passwordEncoder.encode(user.getContraseña()));
        Usuario savedUser = userRepository.save(user);

        UserResponse response = new UserResponse(
                savedUser.getNombre(),
               // savedUser.getEmail(),
                savedUser.getRol().name()
        );
        return ResponseEntity.ok(response);
    }

    @GetMapping("/usuarios")
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
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<Usuario> usuarioOpt = userRepository.findByNombre(loginRequest.getUsername());

        if (usuarioOpt.isEmpty() || !passwordEncoder.matches(loginRequest.getPassword(), usuarioOpt.get().getContraseña())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        }

        Usuario usuario = usuarioOpt.get();

        // Crear una respuesta con el ID y el rol
        Map<String, Object> response = new HashMap<>();
        response.put("id", usuario.getId());
        response.put("rol", usuario.getRol().name());

        return ResponseEntity.ok(response);
    }

}