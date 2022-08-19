package com.employeemanager.rest.controller;

import com.employeemanager.rest.Entity.Employee;
import com.employeemanager.rest.repository.EmployeeRepository;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/employees")
public class EmployeeController {
    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }


    @GetMapping
    public List<Employee> getEmployees() {
        return employeeRepository.findAll(Sort.by(Sort.Direction.ASC, "firstName"));
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<String> newEmployee(@Valid @RequestBody Employee newEmployee, BindingResult bindingResult) {
        if(bindingResult.hasErrors()){
            return new ResponseEntity<String>(newEmployee.toString(), HttpStatus.BAD_REQUEST);
        }
        else {
            employeeRepository.save(newEmployee);
            return new ResponseEntity<String>("New Employee Added", HttpStatus.OK);
        }
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> updateEmployee(@Valid @RequestBody Employee newEmployee, @PathVariable Long id, BindingResult bindingResult) {
        if(bindingResult.hasErrors()){
            return new ResponseEntity<String>("Invalid Input", HttpStatus.BAD_REQUEST);
        }
        else {
            employeeRepository.findById(id).map(employee -> {
                employee.setFirstName(newEmployee.getFirstName());
                employee.setLastName(newEmployee.getLastName());
                employee.setEmail(newEmployee.getEmail());
                employee.setRole(newEmployee.getRole());
                employee.setAge(newEmployee.getAge());
                return employeeRepository.save(employee);
            });
            return new ResponseEntity<String>("Employee: " + id + " successfully updated", HttpStatus.OK);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
    }
}
