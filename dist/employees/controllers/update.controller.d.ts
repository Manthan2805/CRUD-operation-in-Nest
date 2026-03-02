import { EmployeesService } from '../employees.service';
import { CreateEmployeeDto } from '../dto/employee.dto';
export declare class UpdateController {
    private service;
    constructor(service: EmployeesService);
    update(id: string, dto: CreateEmployeeDto): any;
}
