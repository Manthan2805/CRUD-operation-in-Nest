import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from '../employees.service';
import { CreateEmployeeDto } from '../dto/employee.dto';
import { SsoGuard } from '../../auth/sso.guard';

@ApiTags('Employees')
@Controller('employees')
export class CreateController {
  constructor(private service: EmployeesService) { }
  @Post()
  //@UseGuards(SsoGuard)
  create(@Body() dto: CreateEmployeeDto) { return this.service.create(dto); }
}