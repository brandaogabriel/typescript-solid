#  Liskov Substitution Principle (Princípio da substituição de Liskov) (L)

## Significado:
Se o(x) é uma propriedade demonstrável dos objetos x de tipo T. Então o(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T. (Subtipos precisam ser substituíveis por seus tipos de base).

## Entendendo:
O que o significado quer te explicar 🤔?

**R**: Subtipos precisam ser substituíveis por seus tipos de base. Em outras palavras, a superclasse pode ser substituída em qualquer momento por uma subclasse pertencente a ela, já que essa subclasse também é uma superclasse.

Como assim 🤯?

**R**: Se meu programa espera um Desconto, algo do tipo 50% de desconto (que herda de Desconto) deve servir como qualquer outro Desconto.

O princípio está intimamente ligado ao [open/closed](../ocp/README.md) principle.


## Exemplo prático:
**Atenção: O exemplo fere outros princípios do S.O.L.I.D, porém o foco deste readme é o Liskov Substitution Principle.**

Vamos observer a classe `lsp/entities/discount.ts`. Note que a classe tem uma relação de É UM. O princípio trata que você deve fazer esse tipo de relacionamento de forma coerente. Note que a classe base **Discount** possui o método de cálculo de desconto e as subclasses possuem o valor de desconto que será utilizado no método de calcular.

Agora observe o método **totalWithDiscount** em `lsp/entities/shopping-cart.ts`. Note que o retorno do método é um *number*, e ele vai retornar o valor total do carrinho a partir de um desconto definido na classe. Perceba que o método trabalha de forma polimórfica e o valor de retorno vai variar de acordo com o tipo de desconto, mas nunca mudando o TIPO de retorno.

Dessa forma, qualquer tipo de desconto deve servir para a classe carrinho.

Algumas coisas que podem quebrar o princípio LSP:
- **Se eu precisar verificar o tipo de retorno de um método**. Em linguagens tipadas isso dificilmente ocorre, mas fica registrado aqui, que pode acontecer.
- **Se eu alterar o comportamento da classe/método**. (Ex.: Pegar um método e alterar seu comportamento, o método deve retornar um número, mas eu altero para retornar um número, porém como string)


## Estrutura de pastas:

- Você pode achar um pouco estranho a quantidade de pastas e arquivos que estão na pasta **lsp**, mas calma que eu vou te explicar.

- Esse padrão é um pouco voltado para a arquitetura limpa (clean architecture).

1. `lsp/entities`, contém o coração do nosso projeto, é nele que geralmente colocamos nossas entidades.
2. `lsp/entities/protocols`, contém as interfaces/tipos do nosso projeto.
3. `lsp/services`, contém os serviços de terceiros, ou seja, partes da nossa aplicação que são vitais também, como banco de dados, serviços de mensagem, etc.
4. `lsp/main.ts`, contém todo o nosso código "sujo", inicialização de variáveis, classes, etc. É nele que iniciamos nossa aplicação.


## Conclusão:
Podemos concluir que, implementando um tipo base, o princípio permite que a classe seja extensível sem necessidade de modificações. Ou seja, a flexibilidade obtida com o open/closed principle só é realmente possível se o LSP é aplicado também.


**Caso queira executar o projeto e testá-lo, execute o `lsp/main.ts`.**
