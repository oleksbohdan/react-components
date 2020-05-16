import React from 'react';
import C from './C'

const B = props => {
    return(
        <C passThrough={props.passThrough}/>
    )
};

export default B;