package net.javaguides.springboot;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		/* Employee employee = new Employee();
		employee.setFirstName("Eva");
		employee.setLastName("Aggarwal");
		employee.setEmailID("eva.aggarwal@duke.edu");
		employeeRepository.save(employee); //saves to database & repo

		Employee employee1 = new Employee();
		employee1.setFirstName("Lilo");
		employee1.setLastName("Stitch");
		employee1.setEmailID("lilostitch@gmail.com");
		employeeRepository.save(employee1); //saves to database & repo


		 */
	}
}
