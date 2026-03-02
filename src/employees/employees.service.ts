import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EmployeesService {
  private readonly filePath = path.join(process.cwd(), 'employees.json');

  private readData() {
    if (!fs.existsSync(this.filePath)) fs.writeFileSync(this.filePath, '[]');
    return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  private writeData(data: any) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  findAll() { return this.readData(); }

  create(dto: any) {
    const data = this.readData();
    const newEmp = { id: Date.now(), ...dto };
    data.push(newEmp);
    this.writeData(data);
    return newEmp;
  }

  update(id: number, dto: any) {
    const data = this.readData();
    const idx = data.findIndex(e => e.id === id);
    if (idx === -1) return null;
    data[idx] = { ...data[idx], ...dto };
    this.writeData(data);
    return data[idx];
  }

  delete(id: number) {
    const data = this.readData().filter(e => e.id !== id);
    this.writeData(data);
    return { success: true };
  }
}