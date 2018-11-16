import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        const { DefaultComponent } = this.props;
        return (
            <div>
                <DefaultComponent />                
            </div>                                                    
        )
    };
};
 
export default Main;