import { Injectable } from '@nestjs/common';
import { CreateCodeSmellDto } from './dto/create-code_smell.dto';

@Injectable()
export class CodeSmellService {
  database_fake = [];

  create(createCodeSmellDto: CreateCodeSmellDto) {
    this.database_fake.push(createCodeSmellDto);
    return createCodeSmellDto;
  }

  findAll() {
    return this.database_fake;
  }
}
