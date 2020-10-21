import React from 'react';

import '../styles/commentStyles.css';

export default class SecondComment extends React.Component {
    render(){
        return(
            <div className="comment">
                <h4>{ this.props.text }</h4>
            </div>
            
        )
    }
}