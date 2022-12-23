import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodeSmellModule } from './code_smell/code_smell.module';
import { DependencyInversionModule } from './dependency_inversion/dependencyInversion.module';

@Module({
  imports: [CodeSmellModule, DependencyInversionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
