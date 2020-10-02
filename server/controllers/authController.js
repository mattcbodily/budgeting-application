const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {firstName, lastName, email, password} = req.body,
              {session} = req,
              db = req.app.get('db');

        const foundUser = await db.auth.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Email already in use');
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.register_user({firstName, lastName, email, hash});
        session.user = newUser[0];
        res.status(201).send(session.user);
    },
    login: async(req, res) => {
        const {email, password} = req.body,
              {session} = req,
              db = req.app.get('db');

        const foundUser = await db.auth.check_user({email});
        if(!foundUser[0]){
            return res.status(400).send('Email not found');
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect');
        }

        delete foundUser[0].password;
        session.user = foundUser[0];
        res.status(202).send(session.user);
    },
    logout: async(req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}