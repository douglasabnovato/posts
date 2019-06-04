import React from 'react';

export default class Comment extends React.Component {
    render(){
        return(
            <h4>{this.props.text}</h4>
        )
    }
}