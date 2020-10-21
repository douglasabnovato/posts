import React from 'react';
import Post from './Post';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <h2>Dê seu melhor e responda as 3 perguntas abaixo !</h2>
        <Post title = "Qual o seu nome completo ?"/>
        <Post title = "Qual a linguagem de programação quer ser ainda melhor ?"/>
        <Post title = "Qual a sua maior dúvida ?"/>
      </div>
    );
  }
}