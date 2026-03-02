export declare class EmployeesService {
    private readonly filePath;
    private readData;
    private writeData;
    findAll(): any;
    create(dto: any): any;
    update(id: number, dto: any): any;
    delete(id: number): {
        success: boolean;
    };
}
