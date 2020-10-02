import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <main>
        <h1>Welcome to Not Named Yet</h1>
        <Link to='/register'>
            <button>Get Started</button>
        </Link>
    </main>
)