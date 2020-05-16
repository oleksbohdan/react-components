import React from 'react';
import B from './B'

class A extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            received: null,
            multiplied: null
        };
        this.passThrough = this.passThrough.bind(this);
    }

    passThrough(value){
        console.log(value);
        this.setState({received: value, multiplied: value * 1000});
    }

    render() {
        return(
            <>
                <B passThrough = {this.passThrough}/>
                <p>Value received from C: {this.state.received}</p>
                <p>Same value multiplied in A: {this.state.multiplied}</p>
            </>
        )
    }
}

export default A;