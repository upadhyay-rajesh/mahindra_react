import React, { Component } from 'react';
class UseErrorBoundaryComponent extends React.Component {
    state={
        c:0
    }

    counterFunction=()=>{
        this.setState({
            c:this.state.c+1
        });
    }

    render() { 
        if(this.state.c==4){
            throw new Error("value of variable should not be 4");
        }
        return <div>
            <h2 onClick={this.counterFunction}>value of c is {this.state.c}</h2>
        </div>;
    }
}
 
export default UseErrorBoundaryComponent;