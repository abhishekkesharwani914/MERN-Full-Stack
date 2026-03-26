import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

function Feedback() {
    const [feedback, setFeedback] = useState({
        good: 0, neutral: 0, bad: 0
    });

    const handleGood = () => {
        setFeedback({...feedback, good: feedback.good + 1})
    }

    const handleNeutral = () => {
        setFeedback({...feedback, neutral: feedback.neutral + 1})
    }

    const handleBad = () => {
        setFeedback({...feedback, bad: feedback.bad + 1})
    }

    return (
        <div>
            <div>
                <h1>Give feedback</h1>
                <Button onClick={handleGood} name = "Good"/>
                <Button onClick={handleNeutral} name = "Neutral"/>
                <Button onClick={handleBad}  name = "Bad"/>
            </div>
            <Statistics feedback={feedback}/>
            
        </div>
    )
}

export default Feedback;