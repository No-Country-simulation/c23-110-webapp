package nocountry.parquedediversiones.demo.conexion;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class DatabaseTest  implements CommandLineRunner {

    private final DataSource dataSource;

    public DatabaseTest(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Conexión exitosa: " + dataSource.getConnection().getMetaData().getURL());
    }
}
