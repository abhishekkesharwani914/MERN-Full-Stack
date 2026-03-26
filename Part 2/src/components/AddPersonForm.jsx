

function AddPersonForm (props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <div>
                name: <input value={props.newName} onChange={props.handleNameChange} type="text" />
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.handleNumberChange} type="text" />
            </div>
            <div>
                <button  type="submit">{props.isEditing ? "update" : "add"}</button>
            </div>
            </form>
        </div>
    )
}

export default AddPersonForm;