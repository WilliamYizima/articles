import { Body, Controller, Get, Post } from '@nestjs/common';
import { DependencyInversionService } from './dependencyInversion.service';
import { CreateDescriptionDto } from './dto/create-code_smell.dto';

@Controller('dependency-inversion')
export class DependencyInversionController {
  constructor(private readonly codeSmellService: DependencyInversionService) {}

  @Post()
  create(@Body() createCodeSmellDto: CreateDescriptionDto) {
    return this.codeSmellService.create(createCodeSmellDto);
  }

  @Get()
  findAll() {
    return this.codeSmellService.findAll();
  }
}
