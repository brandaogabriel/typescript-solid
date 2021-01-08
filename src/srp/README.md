# Single Responsibility Principle (Princípio da responsabildiade Única) (S)

## Significado:
Uma classe deve ter apenas um motivo para mudar (evite conjunções aditivas). Este princípio está intimamente ligado com outro, conhecido como Separation of concerns.

## Entendendo:
O que o significado quer te explicar 🤔?

**R**: Ele basicamente diz que uma classe deve fazer apenas uma coisa e deve ter apenas um motivo para mudar.

Como assim 🤯?

**R**: Quando você tem uma classe que precisa ser alterada mais de uma vez (considerando que ela ja foi alterada outra vez), isso pode significar que sua classe está fazendo mais de uma coisa (responsabilidade)!

## Exemplo prático:
**Atenção: O exemplo fere outros princípios do S.O.L.I.D, porém o foco deste readme é o Single Reponsibility Principle.**

Precisarei que você fique atento ao arquivo **shopping-cart-legacy.ts** em `src/legacy` e aos arquivos em `src/srp`.

- Inicialmente observe o arquivo **shopping-cart-legacy.ts** em `src/legacy`.
- Consegue perceber algo de estranho?
- Se sua resposta foi sim, então você já sabe mais ou menos do que se trata.

Vamos entendê-lo afundo:

A classe é funcional, sem problemas. Porém ao observá-la atentamente, podemos notar que ela tem diversas atribuições para um carrinho de compras.

1. Ela pode adicionar itens ao carrinho
2. Ela pode remover itens do carrinho
3. Ela pode retornar os itens do carrinho
4. Ela tem um status de pedido (orderStatus)
5. Ela tem o valor total dos itens do carrinho.
6. Ela permite fazer o checkout (comprar).
7. Ela permite verificar se o carrinho está vazio.
8. Ela permite enviar mensagens.
9. Ela permite fazer a persistência do pedido.
10. Ela permite limpar o carrinho.

Ufa, acho que é tudo, a classe tem tanta atribuição que até cansei 🥴.

O que tu acha de todas essas responsabilidades para uma classe só? Demais né?!

Inicialmente, é normal moldarmos uma classe com diversas funcionalidades e ao seu termino fazer a refatoração.

É isso que iremos fazer agora.

Observando as 10 atribuições da classe que foram citadas acima, podemos notar de forma mais abstrata o que pertence a UM carrinho de compras e o que não pertence, ou seja, precisamos deixar a classe com apenas uma responsabilidade e coesa.

Abaixo está os pontos que ao meu entendimento, não fazem sentido estar em um carrinho de compras e sim em uma outra classe.

* Ela tem um status de pedido (orderStatus)
* Ela permite fazer o checkout (comprar).
* Ela permite enviar mensagens.
* Ela permite fazer a persistência do pedido.

Retirando essas responsabilidades da classe `shopping-cart-legacy.ts`, a mesma agora está com apenas uma responsabilidade e está coesa.

**Verique a nova classe com responsabilidade única em `src/srp/entities/shopping-cart.ts`**

- Você pode achar um pouco estranho a quantidade de pastas e arquivos que estão na pasta **srp**, mas calma que eu vou te explicar.

- Esse padrão é um pouco voltado para a arquitetura limpa (clean architecture).

1. `srp/entities`, contém o coração do nosso projeto, é nele que geralmente colocamos nossas entidades.
2. `srp/entities/protocols`, contém as interfaces/tipos do nosso projeto.
3. `srp/services`, contém os serviços de terceiros, ou seja, partes da nossa aplicação que são vitais também, como banco de dados, serviços de mensagem, etc.
4. `srp/main.ts`, contém todo o nosso código "sujo", inicialização de variáveis, classes, etc. É nele que inicializamos nossa aplicação.

Agora que entendemos a estrutura de pastas, voltemos ao foco!

Uma vez retirada a responsabilidade do carrinho, podemos notar que seria interessante ter uma classe **Order** em nosso sistema.

- Observe a classe `order.ts` em `srp/entities/order.ts`.
- Note que a mesma agora possui um carrinho de compras (shopping-cart) e também um **orderStatus**. Conseguimos resolver os problemas com uma classe.
- A classe `order.ts` é responsável pelo gerenciamento do carrinho e também por fazer o checkout (compra).
- Retiramos a responsabilidade de instanciar uma persistência e envio de mensagem da classe `order.ts` e colocamos apenas como uma injeção de depêndencia.
- Persistência e Messagem viram serviços externos. (Verificar `srp/services`).

Podemos concluir que, aplicando esse princípio em nossos projetos, percebemos o quão legível ele fica, com alta coesão, distribuição correta de responsabilidades e também fácil de entender.

**Caso queira executar o projeto e testa-lo, execute o `srp/main.ts`.**
