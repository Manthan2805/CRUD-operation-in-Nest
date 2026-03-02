import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateController } from './controllers/create.controller';
import { GetController } from './controllers/get.controller';
import { DeleteController } from './controllers/delete.controller';
import { UpdateController } from './controllers/update.controller';

@Module({
  controllers: [CreateController, GetController, DeleteController, UpdateController],
  providers: [EmployeesService],
})
export class EmployeesModule { }