import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John Doe' }) name: string;
  @ApiProperty({ example: 'Software Engineer' }) position: string;
}