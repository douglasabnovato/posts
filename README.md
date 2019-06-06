# state ReactJS

## Atualização: 06 de junho de 2019
## Criação: 02 de junho de 2019
## Prática : @douglasabnovato

## Ferramentas : 

![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![Nodejs](/images/nodejs.png)

#### `state ReactJS`
- Estado : 
> O estado do componente não é uma simples variável, ele é gerenciado pelo React que determina a necessidade de cada componente ser renderizado novamente, ou seja, sempre que o nosso estado sofrer alguma alteração em uma informação utilizada dentro do método render nosso componente é montado novamente com as novas informações, em tempo-real, nesse caso, se adicionarmos um novo post ao fim do vetor de posts do estado, ele irá disparar um novo render exibindo-o em tela.
- Fluxo de renderização
- Alterando o estado : 
> Apesar do estado ser uma variável em nossa classe acessada diretamente pelo this.state, não podemos alterar o estado da mesma forma que alteramos uma variável comum, isso porque o estado é imutável, ou seja, ele nunca deve ser alterado e sempre deve ser sobreposto, dessa forma, se precisarmos adicionar um post ao fim da lista, precisamos na verdade redefinir essa variável com o novo post ao fim.
> Para facilitar esse processo, podemos utilizar a função setState em qualquer parte do componente e dessa forma repassamos apenas as variáveis que iremos atualizar no estado, deixando de lado qualquer outra informação que não iremos modificar e o React irá apenas copiar elas para o novo estado.
- Ciclo de vida : 
> os componentes são montados em tela, podem sofrer alterações e no fim são desmontados. Assim, a cada passo do ciclo de vida de um componente conseguimos chamar métodos interceptando sua renderização tradicional ou captando informações desse ciclo. 
##### Ciclo de vida :
1. constructor
2. componentWillMount
3. render
4. componentDidMount
5. componentWillReceiveProps
6. shouldComponentUpdate
7. componentWillUpdate
8. componentDidUpdate
9. componentWillUnmount
10. componentDidCatch

##### {SEM} Ciclo de vida :
1. Stateless Components

##### Redux e a arquitetura Flux
1. resolver algumas lacunas do react

##### State
- O estado (ou state) da sua aplicação, pode ser definido como: o lugar onde os dados vem e se transformam ao longo do tempo.

- Dito isso, os componentes React podem ser divididos em duas categorias: Presentational e Container. Outra nomenclatura usada na comunidade para esses dois é: Stateless (sem estado) e Stateful (com estado).

- Os componentes do tipo Presentational, se importam somente com a apresentação dos dados, portanto não tem estado (stateless).

- Eles podem ser escritos como uma simples função:
```js
import React from 'react';

export default function Presentational() {
  return (
    <h1>Hello World</h1>  
  );
}
```

- O ideal é escrever o máximo possível de componentes dessa categoria. Eles são mais fáceis de desenvolver, manter e testar.

- Já os componentes do tipo Container, além da apresentação dos dados, tem que lidar também com algum tipo de lógica, ou transformação de dados. Por isso necessitam de estado (stateful). 

- Esses componentes não podem ser escritos como uma função, eles obrigatoriamente devem ser uma classe:
```js
import React from 'react';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };
  }
  
  render() {
    return (
      <h1>Hello {this.state.name}</h1>
    );
  }
}
```
- Os dois exemplos mostrados acima tem exatamente o mesmo resultado final. A única diferença é que o primeiro deles não usa o state do React, enquanto que o segundo usa.

- Podemos ainda complicar um pouco mais o segundo exemplo, para demonstrar como é possível alterar o estado do seu componente React:

```js
import React from 'react';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };
  }
  
  change(event) {
    this.setState({ name: event.target.value });
  }
  
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={(e) => this.change(e)} />
        <p>Hello {this.state.name}!</p>
      </div>
    );
  }
}
```

- Em cada mudança que ocorrer no input (linha 16), um evento é disparado na função change. A função change por sua vez altera o estado do componente, usando a função setState, que é nativa do React.

- Toda vez que o estado for alterado, o React automaticamente invoca de novo a função render, que irá renderizar a UI com os novos dados inputados pelo usuário.

#### Ecossistema React

- [x] React
- [x] JSX
- [x] ES2015
- [x] Webpack
- [x] Flux/Redux
- [x] axios/fetch
- [x]Jest/Mocha 

:. De `React do zero: componentização, propriedades e estado`.<br/> 
Por Diego Fernandes - Rocketseat - https://blog.rocketseat.com.br/react-do-zero-componentizacao-propriedades-e-estado/

:. De `React do zero: ciclo de vida, stateless components e arquitetura flux`.<br/> 
Por Diego Fernandes - Rocketseat - https://blog.rocketseat.com.br/react-do-zero-ciclo-de-vida-stateless-components-e-arquitetura-flux/

:. De `Um Guia para Iniciantes no React.js`.<br/>
Por Thiago Reis - Rocketseat - https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649

:. De `Iniciando no ReactJS`.<br/>
Por Diego Fernandes - Rocketseat - https://www.youtube.com/watch?v=7A4UQGrFU9Q 

:. De `O Guia Completo do React e o seu Ecossistema`.<br/>
Por Matheus Lima - Tableless - https://medium.com/tableless/o-guia-completo-do-react-e-o-seu-ecossistema-b31a10ecd84f


