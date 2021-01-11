# Interface Segregation Principle (Princípio da segregação de interface) (I)

## Significado:
Os clientes não devem ser forçados a depender de interfaces que não utilizam.

## Entendendo:
O que o significado quer te explicar 🤔?

**R**: Os clientes não devem ser forçados a depender de types, interfaces ou métodos abstratos que não utilizam.

Como assim 🤯?

**R**: Se eu tenho uma interface *CustomerProtocol* na qual possui os atributos firstName, lastName, cpf e cnpj e tenho duas *classes*, *IndividualCustomer* e *EnterpriseCustomer* e ambas implementam a interface citada acima, podemos notar que ele fere o princípio, já que uma PESSOA cliente não possui dados como cnpj assim como uma EMPRESA não possui cpf, dessa forma estamos forçado as classes a implementar coisas que elas não utilizam.


## Exemplo prático:
**Atenção: O exemplo fere outros princípios do S.O.L.I.D, porém o foco deste readme é o Interface Segregation Principle.**

Vamos imaginar o seguinte cenário: Eu tenho uma classe cliente (individual) e uma classe empresa (enterprise).

Agora pense nos atributos que cada uma dessas classes pode ter (de forma mais abstrata possível).

Observe agora as interfaces em `isp/entities/protocols/customer-protocol.ts`.

Essas interfaces são implementadas pelas classes concretas em `isp/entities/customer.ts`.

Note que em **customer.ts** cada interface está atrelada a sua classe específica e a classe só implementa o que de fato usa.

Dessa maneira, podemos assegurar que o ISP está intacto.

**Obs**: Analíse a interface *DirtyCustomerProtocol* em `isp/entities/protocols/customer-protocol.ts` e perceba que ela tem vários atributos e caso fosse implementada em alguma das classes concretas citadas acima, estaria infringindo o princípio em discussão.


## Estrutura de pastas:

- Você pode achar um pouco estranho a quantidade de pastas e arquivos que estão na pasta **isp**, mas calma que eu vou te explicar.

- Esse padrão é um pouco voltado para a arquitetura limpa (clean architecture).

1. `isp/entities`, contém o coração do nosso projeto, é nele que geralmente colocamos nossas entidades.
2. `isp/entities/protocols`, contém as interfaces/tipos do nosso projeto.
3. `isp/services`, contém os serviços de terceiros, ou seja, partes da nossa aplicação que são vitais também, como banco de dados, serviços de mensagem, etc.
4. `isp/main.ts`, contém todo o nosso código "sujo", inicialização de variáveis, classes, etc. É nele que iniciamos nossa aplicação.


## Conclusão:
Podemos concluir que, analisando a fundo, existem casos em que as interfaces podem representar diversas classes e pode ocasionar problemas e principalmente quando utilizado com injeção de dependência, e que é resolvido através dos padrões de projeto. Com esse princípio implementado, podemos agora utilizá-lo em conjunto com o princípio da inversão de dependência.


**Caso queira executar o projeto e testá-lo, execute o `isp/main.ts`.**
