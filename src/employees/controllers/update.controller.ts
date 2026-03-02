import { Controller, Patch, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from '../employees.service';
import { CreateEmployeeDto } from '../dto/employee.dto';

@ApiTags('Employees')
@Controller('employees')
export class UpdateController {
  constructor(private service: EmployeesService) { }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateEmployeeDto) {
    console.log(id);
    return this.service.update(+id, dto);
  }
}