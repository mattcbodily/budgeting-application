import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getBudget} from '../../redux/reducers/budgetReducer';

const Dashboard = props => {
    let [income, setIncome] = useState(''),
        [monthlySavings, setMonthlySavings] = useState('');

    useEffect(() => {
        axios.get(`/api/budget/${props.user.user_id}`)
        .then(res => {
            if(res.data[0]){
                props.getBudget(res.data[0]);
            }
        })
        .catch(err => console.log(err));
    }, []);

    const createBudget = (e) => {
        const {user_id} = props.user,
              {getBudget} = props;

        e.preventDefault();

        axios.post('/api/budget', {user_id, income, monthlySavings})
        .then(res => {
            getBudget(res.data[0]);
        })
        .catch(err => console.log(err));
    }

    console.log(props.budget)

    return (
        <section>
            {props.budget.income
                ? (
                    <section>
                        Here is your budget
                    </section>
                )
                : (
                    <section>
                        <h3>Create your Budget</h3>
                        <form>
                            <input value={income} onChange={e => setIncome(e.target.value)}/>
                            <input value={monthlySavings} onChange={e => setMonthlySavings(e.target.value)}/>
                            <button onClick={e => createBudget(e)}>Create</button>
                        </form>
                    </section>
                )}
        </section>
    )
}

const mapStateToProps = redux => {
    return {
        user: redux.userReducer.user,
        budget: redux.budgetReducer.budget
    }

}

export default connect(mapStateToProps, {getBudget})(Dashboard);