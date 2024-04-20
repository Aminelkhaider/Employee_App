package com.example.springbootproject.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springbootproject.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
