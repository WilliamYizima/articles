import { Injectable } from '@nestjs/common';
import { DescriptionRepository } from './infra/dependencyInversionRepository';
import { CreateDescriptionDto } from './dto/create-code_smell.dto';

@Injectable()
export class DependencyInversionService {
  // descriptionRepo: DescriptionRepository;
  // constructor(descriptionRepo: DescriptionRepository) {
  //   this.descriptionRepo = descriptionRepo;
  // }
  database_fake = [];

  create(createCodeSmellDto: CreateDescriptionDto) {
    this.database_fake.push(createCodeSmellDto);
    return createCodeSmellDto;
  }

  findAll() {
    return this.database_fake;
  }
}
