import Header from './components/Header';
import Content from './components/Content';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from 'react';
import Feedback from './components/Feedback';

function App() {
  const [counter, setCounter] = useState(0);

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0, right:0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
          setAll([...allClicks, 'L'])
          setClicks({...clicks, left: clicks.left +1})
  }

  const handleRightClick = () => {
    setAll([...allClicks, 'R'])
    setClicks({...clicks, right: clicks.right + 1})
  }

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  const course = {
    name: "Half Stack application development",
    parts : [ 
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Display counter = {counter}/>
      <Button onClick = {increase} name = "+"/>
      <Button onClick = {decrease} name = "-"/>
      <Button onClick = {reset} name = "Reset"/>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>

      <Button onClick = {handleLeftClick} name = "Left"/>
      <Button onClick = {handleRightClick} name = "Right"/>
      <p>{clicks.left} - {clicks.right}</p>
      <p>{allClicks.join(' ')}</p>
      <Feedback/>
      
    </div>
  )
}

export default App
