import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Header = props => (
    <header>
        <h3>Not Named Yet</h3>
        {props.location.pathname === '/'
            ? (
                <nav>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </nav>
            )
            : null}
    </header>
)

export default withRouter(Header);