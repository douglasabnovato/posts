import React from 'react';
import ThirdComment from './ThirdComment'

import '../styles/postStyles.css';

export default class ThirdPost extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            comments: [],
            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);   
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState({ newCommentText: '' });

        e.preventDefault();
    }
    
    handleTextChange(e){
        this.setState({ newCommentText: e.target.value })
    }
    
    render(){
        return (
            <div>

                
                <div className="input-button"> 
                    <h3>{this.props.title}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            value={this.state.newCommentText} 
                            onChange={this.handleTextChange} 
                        /> 
                        <button type="submit">Responder</button>
                    </form>
                </div>      
                <div className="comment-area">
                    { this.state.comments.map((comment, index) => {
                        return <ThirdComment key={index} text={comment.text} />
                    })}
                </div>
            </div>
        )  
    }
}