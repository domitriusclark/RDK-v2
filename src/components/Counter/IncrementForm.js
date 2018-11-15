import React, { Component } from 'react';

class IncrementCount extends Component {
    state = {}
    render() {
        const { props } = this;
        const { incrementCountBy } = props;
        let input;
        return ( 
            <form 
                onSubmit={(e) => {
                    let { value } = input;
                    e.preventDefault();
                    incrementCountBy({ variables: { incrementBy: parseInt(value)  }})
                    value = '';
                }}
            >
                <input ref={node => { input = node }} placeholder={`Pick a number`}/>
                <button type="submit">Change the increment number</button>                                    
            </form>             
        );
    }
}
 
export default IncrementCount;