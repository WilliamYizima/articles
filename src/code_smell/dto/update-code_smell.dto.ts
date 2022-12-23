import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeSmellDto } from './create-code_smell.dto';

export class UpdateCodeSmellDto extends PartialType(CreateCodeSmellDto) {}
