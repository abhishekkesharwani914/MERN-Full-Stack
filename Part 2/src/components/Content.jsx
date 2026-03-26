function Content({parts}) {
    let reducer = (sum, part) => sum + part.exercises;
    return (
        <div>
            {/* {console.log(parts)} */}
            {parts.map((part, id)   =>       
                    <p key={id}>{part.name} - {part.exercises}</p>
            )}
            <p>Total number of exercises: {parts.reduce(reducer, 0)}</p>
        </div>
    )
}

export default Content;