package nocountry.parquedediversiones.demo.repository;

import nocountry.parquedediversiones.demo.entities.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {
}
