const PersonController = require('../controllers/person.controller');
module.exports =(app)=> {
    app.get('/api',PersonController.index);
    //a route to create a person
    app.post('/api/people',PersonController.createPerson)
}