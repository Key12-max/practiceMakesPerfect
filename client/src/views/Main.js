import React, {useState, useEffect} from "react";

import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
const Main = (props)=>{
    const [people, setPeople] = useState([]);   //initialize our state to an empty array so we can prevent an error when rendering our initially empty list in the PeopleList component.

    return(
        <div>
            <PersonForm people={people} setPeople={setPeople}/>
            <PersonList people= {people} setPeople = {setPeople}/>
        </div>
    )
}
export default Main;