import React, { Component } from 'react';
import ShowData from './showname';
class LoginComponent extends Component {
    state={
        name:"Rajesh"
    }
    render() { 
        return <div>

            i am login component.
            my name is {this.state.name}
            and my address is {this.props.myaddress}

            <ShowData mydata={this.state.name}/>
        </div>
    }
}
 
export default LoginComponent;