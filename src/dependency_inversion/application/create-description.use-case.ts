import { Description } from '../core/Description.entity';
import { DescriptionRepository } from '../infra/dependencyInversionRepository';

export class CreateDescriptionUseCase {
  constructor(private descriptionRepo: DescriptionRepository) {}
  async execute(
    input: CreateDescriptionInput,
  ): Promise<CreateDescriptionOuput> {
    const description = new Description(input.id, input.description);
    return await this.descriptionRepo.create(description);
  }
}
type CreateDescriptionInput = {
  id: number;
  description: string;
};

type CreateDescriptionOuput = {
  id: number;
  description: string;
};
