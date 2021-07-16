# React - Componentes Tipo Classe

# Aulas do Módulo

## Introdução ao React

Os sistemas web mudaram bastante nas últimas duas décadas. Eles surgiram com HTML estático no final dos anos 1990, onde as páginas eram meramente informativas e a interação com usuário se dava unicamente por meio de links.

Nos anos 2000, começa o uso de programação dentro dos servidores web para criar páginas HTML customizadas a partir de dados, o que permite a criação de sistemas minimamente interativos baseados em web. Essa mudança levou ao grande crescimento da área de sistemas web impulsionado majoritariamente pelo e-commerces.

No entanto, a mudança cultural que levaria as pessoas a comprar pela web não foi tão rápida quanto o esperado e houve o estouro da bolha, como foi chamado.

Os sistemas web saíram de evidência nessa época sendo recuperados aproximadamente em 2008 quando surgiram as redes sociais digitais. Essas redes começaram a demandar sistemas mais interativos, responsivos e que não fizessem round-trip, a ida e volta ao servidor que faz com que a página recarregue.

Torna-se comum o uso de Ajax, que permite consultas ao servidor em background e bibliotecas de manipulação do HTML.

No entanto, as redes sociais demandavam tecnologias web mais práticas para seu contexto. Surgem então bibliotecas e frameworks focados em frontend. Começa haver uma migração da lógica de servidor para uma lógica de lado cliente, que usa o servidor apenas para acesso aos dados.

Aparece o contexto de SPA - Single Page Applications, que utiliza apenas uma página HTML modificada conforme a interação com o usuário ou eventos para um sistema inteiro. É nesse contexto em que surge o React, hoje ele é a principal biblioteca de frontend para a produção de SPA.

O React também inaugura o conceito de programação reativa em frontend. Que basicamente é a reconstrução da página sempre que houver mudança nos dados. Iso é feito de uma forma muito inteligente pois ele é capaz de renderizar apenas as partes da página que são dependentes dos dados que foram modificados e não o todo, tendo por resultado um ótimo desempenho.

Para isso, o React usa uma arquitetura de componentes. Grande parte da programação em React está em saber dividir bem uma página em componentes e fazê-los de forma reutilizável e que admita composição com outros componentes.

Veremos o conceito de componente a seguir.

## Introdução aos Componentes

Tudo o que será renderizado pelo React deve ser um componente. Componentes podem ser entendidos como as "partes" de uma página. Eles podem ser compostos por outros componentes.

Vamos começar vendo como dividir uma tela em componentes:

![https://s3-sa-east-1.amazonaws.com/lcpi/91a2ed52-76c5-4a7e-b78a-a243fa87012a.png](https://s3-sa-east-1.amazonaws.com/lcpi/91a2ed52-76c5-4a7e-b78a-a243fa87012a.png)

Elencamos para serem subcomponentes aqueles tenham ações, que renderizem conteúdos a partir de dados, que tenham listas ou qualquer tipo de conteúdo não estático.

![https://s3-sa-east-1.amazonaws.com/lcpi/a34fdd7f-6406-4a28-aea8-8348f0db1cb0.png](https://s3-sa-east-1.amazonaws.com/lcpi/a34fdd7f-6406-4a28-aea8-8348f0db1cb0.png)

Todo o resto pode ser feito em HTML no interior do componente. Nesse caso, fica a nosso critério promover o conteúdo a um componente ou não, tomamos a decisão pensando em alguns critérios:

Por exemplo, partes que, ainda que estáticas, podem ser reaproveitadas em contexto diferente ou são complexas visualmente e carregadas em CSS, são candidatas a se tornarem componentes.

![https://s3-sa-east-1.amazonaws.com/lcpi/14fe2955-b1c3-40ea-8993-73f4b9773c26.png](https://s3-sa-east-1.amazonaws.com/lcpi/14fe2955-b1c3-40ea-8993-73f4b9773c26.png)

Em termos computacionais os componentes podem ser criados de duas formas:

Por funções, chamados de componentes funcionais.

Por classes, que chamaremos de "componentes tipo classe".

Veremos em seguida os componentes do tipo classe.

## Instalação

**Criação de um projeto React**

Para começar vamos criar um projeto.

Você precisa ter o YARN instalado na sua máquina.

Escolha uma pasta no seu computador para criar o projeto. Abra um terminal nessa pasta.

No windows 10, basta clicar com o botão direito do mouse em qualquer lugar da pasta e escolher a opção abrir janela do powershell aqui.

No Linux ou Mac, abra o terminal e navegue até a pasta usando *cd*.

Faremos então o seguinte comando:

```bash
~# yarn create react-app meu-app
```

Quando o yarn terminar a instalação, o que leva um tempinho ele irá mostrar como rodar a aplicação.

Faça o que ele mostra:

```bash
~# cd meu-app
~# yarn start
```

Siga esses passos para criar um novo projeto React e abra-o com o visual studio code ou editor de sua preferência.

Teremos a seguinte estrutura:

![https://s3-sa-east-1.amazonaws.com/lcpi/6bd30170-faee-4666-ba97-1baef489593f.png](https://s3-sa-east-1.amazonaws.com/lcpi/6bd30170-faee-4666-ba97-1baef489593f.png)

Todo nosso código será feito na pasta `src`.

Vamos começar limpando o template básico criado por padrão pelo instalador, remova os seguintes arquivos:

```
/src/App.css
/src/App.test.js
/src/index.css
/src/logo.svg
/src/setupTests.js
```

Abra o arquivo App.js e deixe o conteúdo igual a esse (apenas removemos várias linhas):

```jsx
import React from 'react';

function App() {
    return (
    <div className="App">
    </div>
    );
}
export default App;
```

Agora abra o arquivo index.js e deixe o conteúdo igual ao seguinte (apenas removemos várias linhas):

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
```

Aproveitando que estamos nesse arquivo, ele é o arquivo responsável pela injeção do react no HTML da página.

O método *ReactDOM.Render* renderiza um componente na página dentro de um elemento HTML.

A linha `document.getElementById('root')` define que o elemento HTML onde o react será injetado é um que tenha um ID = 'root'.

Para que um componente seja renderizado ele deve estar dentro do método `ReactDOM.render()` ou dentro de outro componente que seja renderizado pelo método `ReactDOM.render()`.

Se desejar alterar algo no HTML da página por fora do React, você pode encontrá-lo na pasta `public`.

Agora você tem uma aplicação vazia que produz uma página em branco no navegador. Não deve haver erros em seu terminal/powershell.

Se estiver tudo certo, estamos prontos para continuar.

## Componente Simples

Seguindo o guia para criação de um novo projeto você deve ter um projeto rodando e sem conteúdo.

Vamos começar a criar componentes nele. Começaremos pelos componentes criados como classes.

Podemos reaproveitar o componente App para esse exemplo. App é um componente funcional, vamos abordá-los mais para frente no curso. Por enquanto vamos transformá-lo em um componente tipo classe.

Para começar apague a função App:

```jsx
import React from 'react';

export default App;
```

Vamos criar uma classe App no lugar:

```jsx
import React from 'react';

class App extends React.Component{

}

export default App;
```

Observe que componentes tipo classe utilizam herança da classe Component do React, sendo assim, todo o comportamento de componente já está presente na sua classe desde o primeiro momento. Vamos apenas customizá-lo.

O que desejarmos mostrar na tela usando nosso componente é feito pelo método `render()`. Ele deve retornar um HTML (depois veremos que é mais do isso). Vamos adicioná-lo:

```jsx
import React from 'react';

class App extends React.Component{

    render(){
        return <p>Meu primeiro parágrafo em React.</p>
    }
}

export default App;
```

Você já pode ver seu parágrafo aparecer no navegador. Se quiser fazer um HTML de várias linhas, basta colocar todo o conteúdo entre parênteses, mas lembre-se o React só é capaz de renderizar um elemento, portanto todo seu HTML deve ter um elemento raiz:

**Não funciona**

```jsx
import React from 'react';

class App extends React.Component{

    render(){
        return (
          <p>Meu primeiro parágrafo em React.</p>
          <p>Meu segundo parágrafo em React.</p>
          <div>
            <pre>Cansei de parágrafos...</pre>
          </div>
        );
    }
}

export default App;
```

**Funciona**

```jsx
import React from 'react';

class App extends React.Component{

    render(){
        return (
          <div>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
                <pre>Cansei de parágrafos...</pre>
            </div>
          </div>
        );
    }
}

export default App;
```

Se você não quiser colocar um tag HTML como raiz (algumas vezes isso conflita com css da página e coisas do tipo), você pode colocar um `Fragment`, que é basicamente uma tag vazia:

```jsx
import React from 'react';

class App extends React.Component{

    render(){
        return (
          <>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
                <pre>Cansei de parágrafos...</pre>
            </div>
          </>
        );
    }
}

export default App;
```

Versões muito antigas do React podem não aceitar essa sintaxe de fragment, nesse caso use `<React.Fragment></React.Fragment>` no lugar.

Você criou seu primeiro componente no React. Se você já conhecia JavaScript em outro contexto deve ter percebido que o que acabamos de fazer no return do render não é javascript. Uma vez que o HTML não está dentro de uma string.

O que foi escrito dentro do *return*, que pode misturar componentes, HTML, e JavaScript é uma outra linguagem (ou melhor, dialeto) chamada JSX. Ele serve para podermos escrever tanto HTML como JavaScript fora de strings e se colocarmos uma tag que tenha o mesmo nome de um componente ele será renderizado onde a tag estiver. Isso lembra um pouco linguagens de lado servidor como PHP ou ASP.

Nela podemos inserir código JavaScript entre chaves contanto que ele produza um retorno. Por exemplo, vamos mostrar a data de hoje (no formato brasileiro):

```jsx
import React from 'react';

class App extends React.Component{

    render(){
        return (
          <>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
              <pre>Cansei de parágrafos...</pre>
            </div>
            <p>{ new Date().toLocaleDateString("pt-BR") }</p>
          </>
        );
    }
}

export default App;
```

Fizemos um componente estático, que apresenta um HTML na tela. Veremos como deixar os componentes mais interessantes a seguir.
## Props

Primeiramente vamos organizar um pouco melhor nosso projeto criando uma pasta dentro de `/src` chamada `components` assim todo componente será criado lá e não solto dentro do `/src`:

![https://s3-sa-east-1.amazonaws.com/lcpi/6bd30170-faee-4666-ba97-1baef489593f.png](https://s3-sa-east-1.amazonaws.com/lcpi/6bd30170-faee-4666-ba97-1baef489593f.png)

Vamos agora arrastar o App.js para lá. Isso vai gerar um erro porque o index.js está procurando pelo App.js na pasta antiga.

Vamos corrigir o arquivo `index.js`:

A linha que dizia:

```jsx
import App from './App';
```

Deve ser alterada para:

```jsx
import App from './components/App';
```

Agora imagine que você quer fazer um componente reutilizável. Por enquanto, vimos componentes com valores fixos, constantes. Não são muitas as possibilidades de reutilização de um componente constante.

Na programação, sempre que desejamos reutilizar algo tornamos o código mais genérico e parametrizamos suas informações. É o que fazemos com funções por exemplo. Uma função que soma 1 e 2 é muito menos útil e reutilizável do que uma que soma qualquer número...

Podemos aplicar a mesma lógica nos componentes do React. Imagine um componente que produz uma caixinha com bordas na tela e tem um título e um texto. Se parametrizarmos o título e o texto poderemos usar essa caixinha em diversas partes de nossa aplicação, até mesmo em outras aplicações!

No React, esses "parâmetros" de um componente são chamados de "props".Podemos receber props pelo construtor do componente.

Vamos ver como fazer isso:

Primeiro crie um arquivo App2.js na pasta components, nele vamos criar um construtor que recebe as props por parâmetro e chama o construtor da super classe.

```jsx
import React from 'react';

class App2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return ('OK');
  }
}

export default App2;
```

Vamos agora alterar o *render* para usar duas props, uma chamada `title` e uma chamada `text` esses nomes são arbitrários, pode ser o que você desejar.

```jsx
import React from 'react';

class App2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className="box">
        <div className="title">{this.props.title}</div>
        <div className="text">{this.props.text}</div>
    </div>);
  }
}

export default App2;
```

Quando for utilizar o componente App2 você pode passar os valores dos props por nome da mesma forma que passaria atributos html.

```jsx
<App2 title='meu título' text='meu texto'/>
```

Se seu texto for grande ou contiver HTML ou qualquer outra coisa que torne-o inconveniente para passar por props (porque não poderia ser um atributo na tag), podemos usar outra abordagem.

```jsx
<div className="text">{this.props.text}</div>
```

Para:

```jsx
<div className="text">{this.props.children}</div>
```

Agora você pode usar seu componente assim:

```jsx
<App2 title="Isso é um teste">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia, quam sed officiis libero repellat voluptate dolores amet molestiae nostrum aperiam inventore veritatis aut quaerat, tenetur laudantium natus? Saepe, minus!
</App2>
```

Qualquer coisa que você colocar entre a abertura e o fechamento das tags do componente serão passados como `props.children` para o componente! Isso inclui HTML, outros componentes, e até javascript, contanto que esteja entre chaves.

Em seguida veremos como criar componentes com estado, ou seja, com valores internos, que quando modificados fazem com que o componente se renderize novamente na tela.