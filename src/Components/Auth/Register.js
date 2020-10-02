import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducers/userReducer';

const Register = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [verPassword, setVerPassword] = useState('');

    const registerUser = (e) => {
        e.preventDefault();
        if(password && password === verPassword){
            axios.post('/api/register', {firstName, lastName, email, password})
            .then(res => {
                props.getUser(res.data);
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <section>
            <h3>Create an Account</h3>
            <form>
                <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <input type='password' value={verPassword} onChange={e => setVerPassword(e.target.value)}/>
                <button onClick={e => registerUser(e)}>Register</button>
            </form>
        </section>
    )
}

export default connect(null, {getUser})(Register);