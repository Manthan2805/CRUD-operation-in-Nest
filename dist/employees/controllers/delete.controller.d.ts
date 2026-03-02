import { EmployeesService } from '../employees.service';
export declare class DeleteController {
    private service;
    constructor(service: EmployeesService);
    remove(id: string): {
        success: boolean;
    };
}
