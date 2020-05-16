import React from 'react';

class C extends React.Component{
  componentDidMount() {
    this.props.passThrough(Math.random());
  }

  render() {
    return(
        <>
        </>
    )
  }
}

export default C;