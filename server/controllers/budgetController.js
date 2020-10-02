module.exports = {
    getBudget: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.budget.get_budget({id})
        .then(budget => res.status(200).send(budget))
        .catch(err => res.status(500).send(err));
    },
    addBudget: (req, res) => {
        const {user_id, income, monthlySavings} = req.body,
              db = req.app.get('db');

        console.log(user_id)
        console.log(+income)
        console.log(+monthlySavings)

        db.budget.add_budget({user_id, income: +income, monthlySavings: +monthlySavings})
        .then(budget => res.status(200).send(budget))
        .catch(err => res.status(500).send(err));
    }
}