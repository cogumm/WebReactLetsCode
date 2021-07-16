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