import { Module } from '@nestjs/common';
import { DependencyInversionService } from './dependencyInversion.service';
import { DependencyInversionController } from './dependencyInversion.controller';
import { DescriptionRepository } from './infra/dependencyInversionRepository';

@Module({
  providers: [
    DependencyInversionService,
    {
      provide: 'IDescriptionRepository',
      useClass: DescriptionRepository,
    },
  ],
  controllers: [DependencyInversionController],
})
export class DependencyInversionModule {}
