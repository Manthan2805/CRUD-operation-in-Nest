import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from '../employees.service';

@ApiTags('Employees')
@Controller('employees')
export class GetController {
  constructor(private service: EmployeesService) {}
  @Get()
  findAll() { return this.service.findAll(); }
}