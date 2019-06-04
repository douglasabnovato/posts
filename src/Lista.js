import React from 'react';
import Post from './Post';

class Lista extends React.Component { 
    state = {
        posts:[
            { id: 1, title: 'Aprendendo React' },
            { id: 2, title: 'A RocketSeat é massa!' },
            { id: 3, title: 'Ainda não sei outro título' }
        ],
    };
    
    render() {
        return ( 
            //percorrer variável de posts com o método map do JS
            {this.state.posts.map(post => 
                <Post key = {post.id} title={post.title} />    
            )}            
        );
    }
}