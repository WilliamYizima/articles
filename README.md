## Princípio da Inversão de dependência

O objetivo é criar uma aplicação mais robusta e estável(sim, seguindo os princípios e arquitetura conseguimos testar de forma mais fácil) com isso teremos um crescimento 'saudável' 

## Obs

Definições:
- Módulo de alto nível -> podem ser classes que dependem de outras classes
- Módulo de baixo nível -> são classes que não tem dependencia de outras classes

Fazer requisições:
- Utilize a extensão do VSCode "REST CLIENT" para testar o arquivo "api.http" e fazer as requisições

Para rodar a aplicação:
```bash
  npm install
  npm run start:dev
```
## Clean Arch

- A estrutura utilizada foi pensada exatamente pela Clean Archtecture ([esse repo do fullCycle é sensacional para visualizar isso](https://github.com/codeedu/live-imersao-fullcycle8-nestjs-clean-architecture))

![teste](/img/clean-arch.png)

- Com essa estrutura, existe esta organização:
```
src/dependency_inversion
|-core -> entities
|-application -> use case
L dependencyInversion.controller -> controller
```

## Solid

- S O L I **D(dependency inversion Principle)**

Regras "faladas":
- módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações

- abstrações não devem depender de detalhes, detalhes devem depender de abstrações

Observações importantes:
- Para que a primeira "regra" não seja quebrada, é interessante criar uma classe com a única responsabilidade de instanciar(gerenciar) outras classes

- Geralmente é chamado de "Factory" o arquivo que gerencia as classes, porém nesse exemplo o NestJS faz isso no arquivo : 'dependencyInversion.module'

```javascript
    {
      provide: ListAllDescriptionUseCase,
      useFactory: (routeRepo: DescriptionRepository) => {
        return new ListAllDescriptionUseCase(routeRepo);
      },
      inject: [InMemoryRepository],
    },
```
- Essa propriedade no módulo substitui a seguinte implementação:

```javascript
  const repo = new InMemoryRepository();
  const createUseCase = new CreateDescriptionUseCase(repo);
  console.log(body);
  await createUseCase.execute(body);
  console.log('foi criado');
  const listUseCase = new ListAllDescriptionUseCase(repo);
  await listUseCase.execute();
```

- A segunda regra de criação de abstrações é interessante criar interfaces

- No código isso é visto no arquivo 'dependencyInversionRepository.ts' e essa interface é implementada em todos os repository's de forma que 'sigam o mesmo contrato criado pela interface'
