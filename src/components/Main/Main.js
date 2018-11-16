import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Link to="/counter" >To the counter</Link>
                <Link to="/form" >To the form</Link>
            </div>                                                    
        )
    };
};
 
export default Main;