import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDescriptionUseCase } from './application/create-description.use-case';
import { ListAllDescriptionUseCase } from './application/listAllDescription.use-case';
import { CreateDescriptionDto } from './dto/create-code_smell.dto';

@Controller('dependency-inversion')
export class DependencyInversionController {
  constructor(
    private createUseCase: CreateDescriptionUseCase,
    private listAllUseCase: ListAllDescriptionUseCase,
  ) {}

  @Post()
  create(@Body() createCodeSmellDto: CreateDescriptionDto) {
    return this.createUseCase.execute(createCodeSmellDto);
  }

  @Get()
  findAll() {
    return this.listAllUseCase.execute();
  }
}
