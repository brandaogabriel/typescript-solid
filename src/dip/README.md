# Dependency Inversion Principle (Princípio da inversão de dependência) (D)

## Significado:
Módulos de alto nível não devem ser dependentes dos módulos de baixo nível; Ambos devem depender de abstrações. Detalhes devem depender das abstrações, não do inverso.

## Entendendo:
O que o significado quer te explicar 🤔?

**R**: Você deve criar módulos de baixo nível que dependam de outros módulos, porém estes são de alto nível.

Como assim 🤯?

**R**: Para sintetizar, classes de baixo nível são classes que executam tarefas (os detalhes) e classes de alto nível são classes que gerenciam as classes de baixo nível. Se pararmos para analisar, qual seria o módulo de mais alto nível que temos? R: Interface, através dela podemos definir métodos e atributos que serão implementados por outras classes. Com o exemplo abaixo, o entendimento ficará mais claro.


## Exemplo prático:

Vamos observar a classe `dip/entities/order.ts`.

Perceba, no construtor, que a classe possui três dependências, um carrinho, um serviço de persistência e um serviço de envio de mensagens. Podemos notar que a classe sofre de alta dependência.

Vamos aplicar o princípio em questão.
- Devemos criar uma interface para cada dependência, com atributos e métodos que utilizaremos.
- Observe em `dip/entities/protocols` os arquivos `messaging-protocol.ts`, `persistency-protocol.ts` e `shopping-cart-protocol.ts`.
- Note que cada uma das interfaces contém os mesmo métodos e atributos que suas classes concretas possuem.
- Agora implementamos as interfaces em suas respectivas classes.
- Por fim, na classe `dip/entities/order.ts` retiramos as dependências concretas e substituímos pelas interfaces que criamos. **Verifique o tipo no construtor da classe**
- Note que agora `order.ts` não depende mais de nenhum módulo de baixo nível, e sim de um módulo de alto nível, no caso, as interfaces.

Com isso, ainda podemos fazer mocks para testar a integridade do nosso código. **Verifique em `dip/main.ts` na linha 24-36**
- Estamos basicamente simulando o "envio de mensagem", porém sem estar de fato utilizando o serviço de mensagens do sistema.


## Estrutura de pastas:

- Você pode achar um pouco estranho a quantidade de pastas e arquivos que estão na pasta **dip**, mas calma que eu vou te explicar.

- Esse padrão é um pouco voltado para a arquitetura limpa (clean architecture).

1. `dip/entities`, contém o coração do nosso projeto, é nele que geralmente colocamos nossas entidades.
2. `dip/entities/protocols`, contém as interfaces/tipos do nosso projeto.
3. `dip/services`, contém os serviços de terceiros, ou seja, partes da nossa aplicação que são vitais também, como banco de dados, serviços de mensagem, etc.
4. `dip/main.ts`, contém todo o nosso código "sujo", inicialização de variáveis, classes, etc. É nele que iniciamos nossa aplicação.


## Conclusão:
Podemos concluir que, com esse princípio você consegue tirar a dependência de biblioteca de terceiros e abstrair eles com interfaces e quando acontecer algum problema, basta trocar a classe de mais baixo nível.


**Caso queira executar o projeto e testá-lo, execute o `dip/main.ts`.**
