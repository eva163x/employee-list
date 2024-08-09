package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //build read all employees API

    @GetMapping
    public List<Employee> getAllEmployees() { //just returns list of all employees to client
        return employeeRepository.findAll();
    }

    //build create employee API

    @PostMapping()
    public Employee createEmployee(@RequestBody Employee employee){ //saves new employee to repository & database
        return employeeRepository.save(employee);
    }

    //build get employee by ID API

    @GetMapping("{id}") //this adds id to the path to execute this
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) { //path variable is id
        Employee employee = employeeRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Employee with this id" + id + "doesn't exist"));

        return ResponseEntity.ok(employee);
    }

    //build update employee API

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee updatedEmployee) {
        Employee currentEmployee = employeeRepository.findById(id). //finds current record of employee
                orElseThrow(() -> new ResourceNotFoundException("Employee with this id" + id + "doesn't exist"));

        //updates current record with new provided record
        currentEmployee.setFirstName(updatedEmployee.getFirstName());
        currentEmployee.setLastName(updatedEmployee.getLastName());
        currentEmployee.setEmailID(updatedEmployee.getEmailID());

        //save to database & repo
        employeeRepository.save(currentEmployee);

        return ResponseEntity.ok(currentEmployee);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Employee with this id" + id + "doesn't exist"));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
