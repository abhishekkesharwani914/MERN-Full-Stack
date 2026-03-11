function Content({parts}) {
    return (
        <div>
            {/* {console.log(parts)} */}
            <p>{parts[0].name} - {parts[0].exercises} exercises</p>
            <p>{parts[1].name} - {parts[1].exercises} exercises</p>
            <p>{parts[2].name} - {parts[2].exercises} exercises</p>
            <p>Total number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
        </div>
    )
}

export default Content;