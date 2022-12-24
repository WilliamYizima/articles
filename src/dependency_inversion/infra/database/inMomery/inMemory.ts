import { Description } from 'src/dependency_inversion/core/Description.entity';
import { CreateDescriptionDto } from 'src/dependency_inversion/dto/create-code_smell.dto';
import { DescriptionRepository } from '../../dependencyInversionRepository';

export class InMemoryRepository implements DescriptionRepository {
  database_fake = [];

  create(createDescription: CreateDescriptionDto) {
    const description: Description = new Description(
      createDescription.id,
      createDescription.description,
    );
    this.database_fake.push(description);
    return description;
  }

  findAll() {
    return this.database_fake;
  }
}
