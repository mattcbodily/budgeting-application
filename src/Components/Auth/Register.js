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

    const register = () => {
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
            <input value={firstName}/>
            <input value={lastName}/>
            <input value={email}/>
            <input type='password' value={password}/>
            <input type='password' value={verPassword}/>
        </section>
    )
}

export default connect(null, {getUser})(Register);