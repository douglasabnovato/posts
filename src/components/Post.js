import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Comment text = "Bom post"/>
            </div>
        )  
    }
}