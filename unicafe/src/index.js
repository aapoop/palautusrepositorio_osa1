import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
)

const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {

if (props.good + props.bad + props.neutral ===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.good + props.bad + props.neutral}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(props.good * 1 + props.bad * -1) / (props.good + props.bad + props.neutral)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.good / (props.good + props.bad + props.neutral) * 100 + ' %'}</td>
        </tr>
      </table>
    </div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
