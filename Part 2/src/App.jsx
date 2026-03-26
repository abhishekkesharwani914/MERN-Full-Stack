import { useState, useEffect } from "react"
import Filter from "./components/Filter";
import AddPersonForm from "./components/AddPersonForm";
import Persons from "./components/Persons";
import { getAll, create, deletePerson, update } from "./API/Api";
import Notification from "./components/Notification";


function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [editingPersonId, setEditingPersonId] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    if(persons.find(p => p.name === e.target.value)) {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    try {
      if (editingPersonId) {
        const res = await update(editingPersonId, personObject);
        setPersons(persons.map((person) => person.id === editingPersonId ? res.data : person));
        setEditingPersonId(null);
        setSuccessMsg("Person updated successfully!");
      } else {
        const res = await create(personObject);
        setPersons([...persons, res.data]);
        setSuccessMsg("Person added successfully!");
      }

      setNewName("");
      setNewNumber("");
    } catch (error) {
      setErrorMsg("Error occurred while adding/updating person.");
      console.log(error);
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      await deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
      // if (editingPersonId === id) {
      //   setEditingPersonId(null);
      //   setNewName("");
      //   setNewNumber("");
      // }
      setErrorMsg("Person deleted successfully!");
    }
  }

  const handleEdit = (person) => {
    setEditingPersonId(person.id);
    setNewName(person.name);
    setNewNumber(person.number);
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const res = await getAll();
        setPersons(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPersons();
  }, [])

  useEffect(() => {
    if (!successMsg && !errorMsg) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setSuccessMsg(null);
      setErrorMsg(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [successMsg, errorMsg]);

  const handleClear = () => {
    setSuccessMsg(null);
    setErrorMsg(null);
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <Notification success={successMsg} error={errorMsg} handleClear={handleClear} />
        <Filter handleFilter={handleFilter} filter={filter}/>
        <h1>Add a new</h1>
        <AddPersonForm
          handleSubmit={handleSubmit}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
          isEditing={editingPersonId !== null}
        />
        <h2>Numbers</h2>
        <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
  )
}

export default App
