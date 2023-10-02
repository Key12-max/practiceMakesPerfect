const { request, response } = require("express");
//add new method to handle the creation of our person
const Person = require('../models/person.model')
module.exports.index = (request,response) => {
    response.json({
        message: "Wellcome to coding!"
    });
}
module.exports.createPerson = (request, response)=>{

    Person.create(request.body)
        .then(person = response.json(person))
        .catch(err =>response.json(err));
}
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => {
            console.log(persons); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(persons);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

