package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() { //just returns list of all employees to client
        return employeeRepository.findAll();
    }

    @PostMapping()
    public Employee createEmployee(@RequestBody Employee employee){ //saves new employee to repository & database
        return employeeRepository.save(employee);
    }
}
