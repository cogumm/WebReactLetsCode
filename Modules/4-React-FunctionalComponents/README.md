# React - Componentes Funcionais

### Menu
<ul style="list-style-type:circle">
  <li><a href="#introdução-a-componentes-funcionais">Aula 01 - Introdução a Componentes Funcionais</a></li>
  <li><a href="#hook-de-estado">Aula 02 - Hook de Estado</a></li>
  <li><a href="#hook-de-efeitos">Aula 03 - Hook de Efeitos</a></li>
</ul>

# Aulas do Módulo

## Introdução a Componentes Funcionais

Os componentes funcionais eram considerados os "componentes burros" do React, eles eram componentes simplificados que só tinham props e renderizavam html na tela. Eles não eram capazes de ter estado, e portanto de realizar alterações de estado. Não tinham os métodos de ciclo de vida, o que não permitia que coletassem dados externamente, o que chamamos na programação funcional de efeitos colaterais (side effects).

E por esses motivos eram usados apenas para coisas mais simples no React. No entanto, nas últimas atualizações da biblioteca, eles foram revistos e o React introduziu o conceito de Hooks, os hooks permitem aos componentes funcionais terem estado, efeitos, modificar seu estado e uma série de outras capacidades.

Sendo assim, os componentes tipo classe que se tornaram obsoletos e hoje a recomendação é que tudo seja feito por componentes funcionais. O time do React é funcional, portanto, é natural que eles tenham a tendência de não depender da abordagem orientada a objetos usada nos componentes tipo classe.

Componentes funcionais são de fato mais simples, eles são apenas uma função, veja um exemplo:

```jsx
import React from 'react';

export default function Hello(){
    return (<h1>Hello!</h1>);
}
```

Simples assim construímos um componente funcional que renderiza um H1 com o texto "Hello!". Para fazer um paralelo com os componentes tipo classe que vimos, pense que o componente funcional é o método render do componente tipo classe. Seu retorno é o que será mostrado na tela.

Diferentemente do render() o componente funcional recebe props em seu parâmetro, então basta utilizá-las diretamente. Veja o exemplo:

```jsx
import React from 'react';

export default function Hello(props){
    return (<h1>{props.text}</h1>);
}
```

O uso é idêntico ao tipo classe:

```html
<Hello text='Hello!!!'>
```

Da mesma forma podemos passar children:

```jsx
import React from 'react';

export default function Hello(props){
    return <>{props.children}</>;
}
```

O uso também é idêntico:

```html
<Hello>
    <h1>Hello!</h1>
</Hello>
```

Uma prática muito comum em componentes funcionais é desestruturar o props imediatamente dentro do parâmetro do componente, o que nos desobriga de escrever `props.` sempre que formos usar. Veja os exemplos anteriores usando desestruturação:

```jsx
import React from 'react';

export default function Hello({text}){
    return (<h1>{text}</h1>);
}
```

```jsx
import React from 'react';

export default function Hello({children}){
    return <>{children}</>;
}
```

Mais limpo assim, não é?

Componentes extremamente simples podem ser criados como arrow functions:

```jsx
import React from 'react';
const Titulo = ({text}) => <h1>{text}</h1>;
export default Titulo;
```

Mesmo que aparentemente não seja usada, não esqueça da importação do React nos componentes funcionais!

Ela garante o uso do JSX no componente.

Você pode achar estranho que tanto uma função como uma classe podem ser componentes no React, mas lembre-se, a orientação a objetos do JavaScript é ilusória, por mais que estejamos fazendo uma classe, por baixo dos panos o JavaScript vai transformá-la em uma função (ele não tem o conceito de classe).

Sendo assim, classes e funções são a mesma coisa. Você também pode estar pensando: sacanagem mostrar componentes como classes para depois dizer que eles estão em desuso!

Fazemos isso porque em códigos legados existe grande chance de você cruzar com componentes como classes, pois eles foram por muito tempo a única forma de componente em que os conceitos de estado e ciclo de vida existiam.

Também porque, agora que você conhece todos os conceitos vistos nos componentes tipo classes, só precisamos adaptá-los aos componentes funcionais, você já sabe tudo o que é necessário. Sendo assim, só será necessário conhecer os hooks, o que veremos a seguir.

---

## Hook de Estado

> Components Funcionais com Estado (useState hook)

Como dito anteriormente, componentes funcionais não podiam ter estados até a atualização do React que nos deu os hooks.

O hook de estado é chamado de `useState()` precisamos importá-lo de dentro do React antes de poder utilizá-lo em nossos componentes.

```jsx
import React, {useState} from 'react';
```

`useState` é uma função que produz um vetor, na primeira posição vem uma referência ao estado que você acabou de criar. Na segunda posição vem uma função que permite modificar o estado. Se desejar um valor padrão inicial, ele pode ser passado por parâmetro na chamada do `useState`.

Como é estranho usar um array dessa forma, sempre optamos pela desestruturação imediata do retorno do `useState` em duas constantes. Veja o exemplo:

```jsx
import React, {useState} from 'react';

export default function App(){

    const [nome, setNome] = useState('teste');

    return (<h1>{nome}</h1>);
}
```

Para ler o estado do nome, utilize a constante `nome`.

Para alterar o estado no nome, utilize a função `setNome()`.

Os nomes das constantes você escolhe (tanto da constante de leitura como da função de alteração), mas é muito conveniente manter essa convenção de usar na função o mesmo que foi usado na constante precedido da palavra set. Que é uma nomenclatura muito comum no Java, de onde o javascript herda sua sintaxe.

Uma diferença importantíssima entre a função de alteração do estado criada pelo `useState` e a função `setState` que usávamos nos componentes tipo classe é que ela não aceita a alteração parcial de um objeto, ela sobrescreve o objeto completamente, que deve ser passado em sua totalidade.

Imagine o seguinte estado:

```jsx
{ nome: 'teste', idade: 20 }
```

Em componentes como classe podíamos fazer:

```jsx
setState({ idade: 21 });
```

Ele manteria o restante do objeto e alteraria apenas a idade.

Em componentes funcionais devemos fazer (assumindo que setState é nossa função de alteração):

```jsx
setState({ nome : 'teste', idade: 21 });
```

Quer dizer que temos que saber quais são os valores de todas as outras propriedades do estado para fazer a alteração de apenas uma??

Na verdade não, novamente a desestruturação pode nos ajudar:

```jsx
setState({ ...state, idade: 21 });
```

Usando desestruturação de objetos, todas as propriedades que ele tem, assim como seus valores, são passadas para o novo objeto. Assim podemos passar em seguida a propriedade que desejamos alterar e seu novo valor.

Essa sintaxe também serve para adicionar novas propriedades no objeto.

Vamos agora fazer um exemplo completo de uso de state com leitura e alteração do estado:

```jsx
import React, {useState} from 'react';

export default function App(){

    const [nome, setNome] = useState('');

    return (
    <>
        <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
        <h1>{nome}</h1>
    </>
    );
}
```

No exemplo acima criamos um estado chamado nome e uma função setNome para alterá-lo. O valor inicial do nome é dado pelo parâmetro passado ao setState, no caso string vazia.

Conforme o usuário digita no campo de texto, o nome é alterado para o valor do campo. Isso faz com que o React atualize imediatamente o H1 abaixo.

Lembre-se, da mesma forma que nos componentes tipo classe, nunca faça atribuições ao estado diretamente, sempre utilize a função. Senão o React não atualizará o componente para mostrar a mudança na tela.

Para garantir que esse erro não aconteça, sempre use `const` antes de desestruturar o `useState` nunca use `let`.

Nos componentes funcionais podemos fazer um estado para cada valor que desejamos utilizar, diferentemente das classes em que apenas um estado era possível e deveria sempre ser um objeto.

Por isso, é aconselhável fazer mais `useState`, por exemplo, um para cada valor em vez de fazer apenas um com um objeto dentro.

Claro que fica a critério e bom senso do programador quando usar objetos e quando guardar os valores separadamente.

Leve em conta a complexidade, quais deles geram atualizações na tela e quantos objetos você precisa guardar, se for mais um opte por colocá-los inteiros cada um em seu state em vez de fazer um state para cada propriedade.

Em seguida passamos para o hook que equivale ao ciclo de vida em um componente funcional.

---

## Hook de Efeitos

**Componentes Funcionais com Efeitos (Ciclo de Vida)**

Dissemos que o ciclo de vida dos componentes tipo classe são utilizados para fazer "efeitos colaterais" (side effects), que é o nome que programadores funcionais dão para qualquer operação que seja feita fora de nossa função, por exemplo, consultas/alterações em bancos de dados ou chamadas em APIs.

Essa palavra é importante pois o hook que usamos para isso em componentes funcionais é chamado de `useEffect`. Esse é um hook bem mais complexo que `useState` que vimos anteriormente.

O `useEffect` é uma função que recebe dois parâmetros, o primeiro é uma função de callback que rodará e produzirá o nosso efeito, em outras palavras, é o que queremos fazer. O segundo é um vetor, nesse vetor colocamos o nome de variáveis que serão monitoradas pelo effect, caso essas variáveis mudem de valor o effect rodará novamente.

As funções de callback passadas para o `useEffect` podem opcionalmente retornar uma outra função. Essa função seria usada para fazer uma limpeza do que foi feito pelo effect. Por exemplo, de fizemos uma consulta ao banco de dados, podemos usar essa função para fechar a conexão.

Efeitos rodam imediatamente na montagem do componente, mas também rodam novamente todas as vezes que o componente fizer update. Por isso, geralmente trabalhamos com o vetor de variáveis e condicionais para garantir que ele não rode mais vezes do que o desejado.

Muito cuidado com efeitos que manipulam o estado, pois isso gera um update e consequentemente roda o efeito novamente. Se não restringirmos esse comportamento podemos fazer um laço infinito de atualizações que fará com que nosso componente não renderize.

Vamos começar usando o componente da lição passada e adicionar um effect nele que faz `console.log` do nome.

```jsx
import React, {useState, useEffect} from 'react';

export default function App(){

    const [nome, setNome] = useState('');

    useEffect(() => {
    console.log('Effect: ', nome);
    });

    return (
    <>
        <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
        <h1>{nome}</h1>
    </>
    );
}
```

Observe que ele faz um log imediatamente quando o componente monta com o nome vazio.

Depois ele roda todas as vezes que o nome é alterado, letra a letra.

Observe que não passamos um array para o effect, isso quer dizer que ele vai rodar toda vez que qualquer estado for alterado.

Agora, vamos modificar o `useEffect` para adicionar o parâmetro que falta. Vamos passar um array vazio:

```java
useEffect(() => {
    console.log('Effect: ', nome);
}, []);
```

Observe que agora nosso efeito rodou apenas uma vez na montagem do componente.

Ele não roda mais quando o nome é alterado porque não dissemos que ele deve monitorar o estado do nome.

O array vazio representa que esse efeito não deve monitorar nenhum estado no componente.

Se passarmos o nome nesse array, ele monitorará apenas o estado do nome, não rodando na alteração de outros estados.

```jsx
useEffect(() => {
    console.log('Effect: ', nome);
}, [nome]);
```

Sendo assim podemos criar uma lógica que faça o effect ler o nome do sessionStorage quando rodar pela primeira vez, e depois monitorar o nome e gravar no sessionStorage o novo valor quando ele for alterado...

```jsx
import React, {useState, useEffect} from 'react';

export default function App(){

    const [nome, setNome] = useState(undefined);

    useEffect(() => {
    if(nome === undefined){
        setNome(sessionStorage.getItem('nome') || "");
    }
    else{
        sessionStorage.setItem('nome', nome);
    }
    }, [nome]);

    return (
    <>
        <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
        <h1>{nome}</h1>
    </>
    );
}
```

Configuramos nosso efeito para rodar no início (como sempre) e a cada mudança do estado do nome (passado no array de dependências).

Quando começamos, o nome estará como `undefined` então pudemos usar um if para verificar se ele está com esse valor e se estiver tentamos ler o valor do `sessionStorage` usamos `|| ""` como fallback caso não exista valor no sessionStorage também.

Se o efeito cair no else, isso quer dizer que o nome foi alterado, como não há nada que o usuário possa fazer para fazer o nome ficar `undefined` novamente essa técnica é razoavelmente segura.

No else, persistimos a alteração do nome no `sessionStorage` observe que ao escrever no campo o valor do H1 muda como antes, mas que se você recarregar a página o último valor continua preenchido!

Com isso chegamos ao final. Agora você pode fazer com um componente funcional tudo o que os componentes tipo classe podiam fazer e de forma mais concisa e enxuta.