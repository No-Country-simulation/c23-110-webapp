package nocountry.parquedediversiones.demo.repository;

import nocountry.parquedediversiones.demo.entities.Juegos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JuegosRepository extends JpaRepository<Juegos, Long> {
}
