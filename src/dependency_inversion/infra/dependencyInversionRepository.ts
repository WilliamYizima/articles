import { Description } from 'src/dependency_inversion/core/Description.entity';

export interface DescriptionRepository {
  findAll(): Description[];

  create(createDescription): Description;
}
