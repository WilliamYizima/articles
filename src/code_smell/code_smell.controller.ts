import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CodeSmellService } from './code_smell.service';
import { CreateCodeSmellDto } from './dto/create-code_smell.dto';

@Controller('code-smell')
export class CodeSmellController {
  constructor(private readonly codeSmellService: CodeSmellService) {}

  @Post()
  create(@Body() createCodeSmellDto: CreateCodeSmellDto) {
    return this.codeSmellService.create(createCodeSmellDto);
  }

  @Get()
  findAll() {
    return this.codeSmellService.findAll();
  }
}
