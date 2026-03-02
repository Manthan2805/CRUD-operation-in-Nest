import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from '../employees.service';

@ApiTags('Employees')
@Controller('employees')
export class DeleteController {
  constructor(private service: EmployeesService) {}
  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.delete(+id); }
}