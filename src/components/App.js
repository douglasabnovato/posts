import React from 'react';
import FirstPost from './FirstPost';
import SecondPost from './SecondPost';
import ThirdPost from './ThirdPost';

import '../styles/appStyles.css';

export default class App extends React.Component {
  render(){
    return (
      <div class="container">

        <h2>Dê seu melhor e responda as 3 perguntas abaixo !</h2>

        <div class="questions">

          <div className="post">
            <FirstPost title = "Qual o seu nome completo ?"/>
          </div>
          <div className="post">
            <SecondPost title = "Qual a linguagem de programação quer ser ainda melhor ?"/>
          </div>
          <div className="post">
            <ThirdPost title = "Qual a sua melhor dúvida ?"/>
          </div>

        </div>
      </div>
    );
  }
}