import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        };

        this.hundleSubmit = this.hundleSubmit.bind(this);
        this.handleTextChange = this.hundleTextChange.bind(this);   
    }

    hundleSubmit(e){
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState({ newCommentText: '' });

        e.preventDefault();
    }
    
    hundleTextChange(e){
        this.setState({ newCommentText: e.target.value })
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                        />
                    <button type="submit">Comentário</button>
                </form>
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} text = {comment.text}/>
                })}
                
            </div>
        )  
    }
}