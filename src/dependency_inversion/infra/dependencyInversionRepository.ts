import { Description } from '../core/Description.entity';

export interface DescriptionRepository {
  findAll(): Description[];

  create(createDescription): Description;
}
