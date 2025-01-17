package nocountry.parquedediversiones.demo;

import nocountry.parquedediversiones.demo.entities.Entradas;
import nocountry.parquedediversiones.demo.entities.Juegos;
import nocountry.parquedediversiones.demo.entities.Venta;
import nocountry.parquedediversiones.demo.enums.MetodoEnum;
import nocountry.parquedediversiones.demo.repository.EntradasRespository;
import nocountry.parquedediversiones.demo.repository.JuegosRepository;
import nocountry.parquedediversiones.demo.repository.VentaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.util.Date;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

//	@Bean
//	CommandLineRunner init(VentaRepository ventaRespository, JuegosRepository juegosRepository, EntradasRespository entradasRespository){
//		return args -> {
//			/* Juegos */
//			Juegos montañaRusa = Juegos.builder()
//					.nombre("Montaña Rusa")
//					.horario("16:00 ~ 18:00")
//					.precio(new BigDecimal("5000.00"))
//					.build();
//
//			Juegos calesita = Juegos.builder()
//					.nombre("Calesita")
//					.horario("14:00 ~ 16:00")
//					.precio(new BigDecimal("2000.00"))
//					.build();
//
//			// Guardar jeugos
//			juegosRepository.save(montañaRusa);
//			juegosRepository.save(calesita);
//
//			/* Venta */
//			Venta venta1 = Venta.builder()
//					.metodoDePago(MetodoEnum.EFECTIVO)
//					.fechaDeCompra(new Date())
//					.build();
//
//			ventaRespository.save(venta1);
//
//			/* Entradas */
//			Entradas entradas1 = Entradas.builder()
//					.cantidad(2)
//					.precioTotal(montañaRusa.getPrecio().multiply(BigDecimal.valueOf(2)))
//					.juego(montañaRusa)
//					.venta(venta1)
//					.build();
//
//			Entradas entradas2 = Entradas.builder()
//					.cantidad(2)
//					.precioTotal(calesita.getPrecio().multiply(BigDecimal.valueOf(2)))
//					.juego(calesita)
//					.venta(venta1)
//					.build();
//			// Guardar jeugos
//			entradasRespository.save(entradas1);
//			entradasRespository.save(entradas2);
//		};
//	}

}
