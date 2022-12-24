import { CreateDescriptionUseCase } from './src/dependency_inversion/application/create-description.use-case';
import { ListAllDescriptionUseCase } from './src/dependency_inversion/application/listAllDescription.use-case';
import { InMemoryRepository } from './src/dependency_inversion/infra/database/inMomery/inMemory';

async function create(body) {
  const repo = new InMemoryRepository();
  const createUseCase = new CreateDescriptionUseCase(repo);
  console.log(body);
  await createUseCase.execute(body);
  console.log('foi criado');
  const listUseCase = new ListAllDescriptionUseCase(repo);
  return await listUseCase.execute();
}

const teste = create({ id: 2, description: 'testando' });
console.log(teste);
