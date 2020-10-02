import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducers/userReducer';

const Login = props => {
    let [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        axios.post('/api/login', {email, password})
        .then(res => {
            props.getUser(res.data);
            props.history.push('/dashboard');
        })
        .catch(err => console.log(err));
    }

    return (
        <section>
            <h3>Sign In</h3>
            <form>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={e => loginUser(e)}>Log in</button>
            </form>
        </section>
    )
}

export default connect(null, {getUser})(Login);