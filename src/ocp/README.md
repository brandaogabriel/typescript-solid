# Open/closed principle (Princípio do aberto/fechado) (O)

## Significado:
Módulos, classes, objetos e operações devem estar abertos para extensão, mas fechados para modificações.

## Entendendo:
O que o significado quer te explicar 🤔?

**R**: Ele basicamente diz que módulos, classes, objetos e operações precisam estar disponíveis para possíveis extensões (ex.: adição de um método em uma classe que seu retorno vai variar de acordo com uma lógica definida) e fechada para modificações (ex.: implementação de vários métodos em uma classe que fazem a mesma coisa porém o retorno pode variar de acordo com o parâmetro recebido).

Como assim 🤯?

**R**: Se você tem uma compreensão geral de POO, deve conhecer o polimorfismo. Através dele, com herança ou implementação de interfaces podemos garantir que o nosso código está de acordo com o princípio em questão, isso é um pouco confuso no início, vamos ao exemplo que ficará mais claro.


## Exemplo prático:
**Atenção: O exemplo fere outros princípios do S.O.L.I.D, porém o foco deste readme é o Open/Closed principle.**

Vamos levar em conta o seguinte cenário, imagine que o seu gerente decide implementar na classe `ocp/entities/shopping-cart.ts` uma lógica em que cada dia da semana terá um diferente desconto no valor total de um carrinho. Poderíamos criar para cada dia, um método na classe em que o valor do desconto seria aplicado, porém isso fere o princípio em discussão. Teriamos problemas com testes, pois seria necessário alterá-los para que funcionassem com os novos métodos, teríamos que alterar as classes que fazem uso do carrinho, dentre vários outros problemas.

Podemos resolver esse problema de diversas maneiras, ter um único método na classe e este método recebe o valor de desconto como parâmetro e fazer os cálculos de acordo com a lógica definida, ou também, uma injeção de dependência na qual a classe do carrinho possuiria um Desconto e trabalharia de forma dinâmica.

Para resolver esse problemas, faremos uso de uma classe abstrata e aplicamos o padrão Strategy da GoF, observe a classe `ocp/entities/discount.ts`, é nela que implementamos os descontos e a classe do carrinho trabalha de forma dinâmica com o desconto, observe a injeção de dependência na classe do carrinho `ocp/entities/shopping-cart.ts`.


## Estrutura de pastas:

- Você pode achar um pouco estranho a quantidade de pastas e arquivos que estão na pasta **ocp**, mas calma que eu vou te explicar.

- Esse padrão é um pouco voltado para a arquitetura limpa (clean architecture).

1. `srp/entities`, contém o coração do nosso projeto, é nele que geralmente colocamos nossas entidades.
2. `srp/entities/protocols`, contém as interfaces/tipos do nosso projeto.
3. `srp/services`, contém os serviços de terceiros, ou seja, partes da nossa aplicação que são vitais também, como banco de dados, serviços de mensagem, etc.
4. `srp/main.ts`, contém todo o nosso código "sujo", inicialização de variáveis, classes, etc. É nele que iniciamos nossa aplicação.


## Conclusão:
Podemos concluir que, aplicando esse princípio em nossos projetos, para o exemplo citado, percebemos o quanto flexível ele fica caso seja necessário adicionar novos tipos de desconto, bem como, aplicar uma lógica diferente para determinado tipo de desconto, sem mexer na classe do carrinho e em outras classes, apenas na classe do desconto.

**Caso queira executar o projeto e testá-lo, execute o `ocp/main.ts`.**
