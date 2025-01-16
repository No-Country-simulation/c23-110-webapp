package nocountry.parquedediversiones.demo.repository;

import nocountry.parquedediversiones.demo.entities.Entradas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntradasRespository extends JpaRepository<Entradas, Long> {
}
