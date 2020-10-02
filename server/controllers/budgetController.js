module.exports = {
    getBudget: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.budget.get_budget({id})
        .then(budget => res.status(200).send(budget))
        .catch(err => res.status(500).send(err))
    }
}