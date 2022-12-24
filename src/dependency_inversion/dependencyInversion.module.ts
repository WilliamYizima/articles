import { Module } from '@nestjs/common';
import { DependencyInversionService } from './dependencyInversion.service';
import { DependencyInversionController } from './dependencyInversion.controller';
import { InMemoryRepository } from './infra/database/inMomery/inMemory';
import { CreateDescriptionUseCase } from './application/create-description.use-case';
import { DescriptionRepository } from './infra/dependencyInversionRepository';
import { ListAllDescriptionUseCase } from './application/listAllDescription.use-case';

@Module({
  providers: [
    DependencyInversionService,
    {
      provide: InMemoryRepository,
      useClass: InMemoryRepository,
    },
    {
      provide: CreateDescriptionUseCase,
      useFactory: (routeRepo: DescriptionRepository) => {
        return new CreateDescriptionUseCase(routeRepo);
      },
      inject: [InMemoryRepository],
    },
    {
      provide: ListAllDescriptionUseCase,
      useFactory: (routeRepo: DescriptionRepository) => {
        return new ListAllDescriptionUseCase(routeRepo);
      },
      inject: [InMemoryRepository],
    },
  ],
  controllers: [DependencyInversionController],
})
export class DependencyInversionModule {}
