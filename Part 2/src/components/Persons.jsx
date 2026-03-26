import Button from "./Button";

function Persons({ filteredPersons, handleDelete, handleEdit }) {
    return (
        <div>
            <ul>
                {filteredPersons.map((person) => <li key={person.id}>{person.name}: {person.number} <Button name={"Delete"} onClick={() => handleDelete(person.id)} /> <Button name={"Edit"} onClick={() => handleEdit(person)} /></li>)}
            </ul>
        </div>
    )
}

export default Persons;
