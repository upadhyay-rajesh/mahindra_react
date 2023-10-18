import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
class HomeComponent extends React.Component {

    registerEmployee = () => {
        this.props.history.push(`/register`);
    }
    loginEmployee = () => {
        this.props.history.push(`/login`);
    }
    displayAllEmployee = () => {
        this.props.history.push(`/displayAll`);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.registerEmployee()}>SignUp</button>
                <button onClick={() => this.loginEmployee()}>SignIn</button>
                <button onClick={() => this.displayAllEmployee()}>DisplayAll</button>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink
                        to="/register"
                        activeClassName="selectedLink">
                        register
                    </NavLink>
                    <NavLink
                        to="/login"
                        activeClassName="selectedLink">
                        Login
                    </NavLink>
                    <NavLink
                        to="/displayAll"
                        activeClassName="selectedLink">
                        display all
                    </NavLink>
                </nav>

                <nav>
<Link 
to="/"
>
Home
</Link>
<Link
to="/register"
>
register
</Link>
</nav>
            </div>
        )
    }
}

export default HomeComponent;