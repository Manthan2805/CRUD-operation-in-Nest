import { EmployeesService } from '../employees.service';
import { CreateEmployeeDto } from '../dto/employee.dto';
export declare class CreateController {
    private service;
    constructor(service: EmployeesService);
    create(dto: CreateEmployeeDto): any;
}
