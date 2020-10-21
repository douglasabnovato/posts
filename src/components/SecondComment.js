import React from 'react';

import '../styles/commentStyles.css';

export default class SecondComment extends React.Component {
    render(){
        return(
            <h4>{ this.props.text }</h4>
        )
    }
}