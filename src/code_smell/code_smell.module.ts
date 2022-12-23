import { Module } from '@nestjs/common';
import { CodeSmellService } from './code_smell.service';
import { CodeSmellController } from './code_smell.controller';

@Module({
  controllers: [CodeSmellController],
  providers: [CodeSmellService],
})
export class CodeSmellModule {}
