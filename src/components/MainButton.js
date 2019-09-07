import React, { Component} from 'react'
import Button from 'react-bootstrap/Button';

class MainButton extends Component{
    
    render() {
        return (
            <div style={{ "margin-top": 15 }}>
              <Button variant="outline-primary" onClick={this.props.onClick}>{this.props.title}</Button>
            </div>
        )
    }
}

export default MainButton;