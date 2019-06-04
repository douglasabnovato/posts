import React from 'react';
import Post from './Post';

class Lista extends React.Component { 
    state = {
        posts: [
            { id: 1, title: 'Aprendendo React' },
            { id: 2, title: 'A RocketSeat é massa!' },
            { id: 3, title: 'Ainda não sei outro título' }
        ],
    };

    construtor(props){
        super(props);
        setTimeout(() => {
            this.setState({
                posts: [
                    ...this.state.posts,
                    { id: 4, title: 'state in React' }
                ]
            });
        }, 2000);
    }
    
    render() {
        return ( 
            //percorrer variável de posts com o método map do JS
            {this.state.posts.map(post => 
                <Post key = {post.id} title={post.title} />    
            )}            
        );
    }
}