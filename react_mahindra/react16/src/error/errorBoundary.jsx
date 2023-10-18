import React, { Component } from 'react';

class ErrorBoundaryComponent extends Component {

    state={
        error:null,
        errorInfo:null
    }

    componentDidCatch(error1,errorInfo1){
        this.setState({
            error:error1,
            errorInfo:errorInfo1
        })
    }

    render() { 
        if(this.state.errorInfo){
        return (
        <div>
            <details>
                error is {this.state.error.toString()}
                <br></br>
                {this.state.errorInfo.componentStack}
            </details>
        </div>
        );
    }
    return this.props.children;
}
}
 
export default ErrorBoundaryComponent;