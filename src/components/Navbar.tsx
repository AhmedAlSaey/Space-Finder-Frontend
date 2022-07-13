import React from "react";
import { ReactNode } from "react";
import { User } from "../model/Model";
import { Link } from 'react-router-dom'

export class Navbar extends React.Component<{
    user: User | undefined,
}> {
    render(): ReactNode {
        let loginLogout: any
        if (this.props.user) {
            loginLogout = <Link to='/logout' style={{float:'right'}}>{this.props.user.userName}</Link>
        }
        else {
            loginLogout = <Link to='/login' style={{float:'right'}}>Login</Link>
        }

        return(
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/spaces'>Spaces</Link>
            {loginLogout}
        </div>)
    }
}