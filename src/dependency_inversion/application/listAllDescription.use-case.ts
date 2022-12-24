import { DescriptionRepository } from '../infra/dependencyInversionRepository';

export class ListAllDescriptionUseCase {
  constructor(private descriptionRepo: DescriptionRepository) {}

  async execute(): Promise<ListDescriptionOutput> {
    const descriptions = await this.descriptionRepo.findAll();
    return descriptions.map((r) => r);
  }
}

type ListDescriptionOutput = {
  id: number;
  description: string;
}[];
