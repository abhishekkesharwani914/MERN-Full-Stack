function Statistics({feedback}) {
    return (
        (feedback.good + feedback.neutral + feedback.bad) > 0 ? (
        <div>
            <h1>Statistics</h1>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>All: {feedback.good + feedback.neutral + feedback.bad}</p>
            <p>Average: {feedback.good + feedback.neutral + feedback.bad > 0 ? ((feedback.good) + (feedback.neutral) + (feedback.bad)) / 3 : 0}</p>
            <p>Positive: {feedback.good + feedback.neutral > 0 ? ((feedback.good) + (feedback.neutral)) / (feedback.good + feedback.neutral + feedback.bad) * 100  : 0}%</p>
        </div>): (
            <div>
                <h1>Statistics</h1>
                <p>No feedback yet.</p>
            </div>
        )
    )
}
export default Statistics;