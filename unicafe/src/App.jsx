import { useState } from "react"

const Title = (props) => <h1>{props.text}</h1>

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  const ratings = {
    good: parseInt(props.states.good),
    neutral: parseInt(props.states.neutral),
    bad: parseInt(props.states.bad),
  }

  const valuesForAvg = [ratings.good * 1, ratings.neutral * 0, ratings.bad * -1]
  console.log(valuesForAvg)

  const sum = ratings.good + ratings.neutral + ratings.bad
  const average = (valuesForAvg[0] + valuesForAvg[1] + valuesForAvg[2]) / 3
  const percentageOfGood = `${(ratings.good / sum) * 100}%`

  if (sum === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <StatisticLine text='good' value={ratings.good} />
        <StatisticLine text='neutral' value={ratings.neutral} />
        <StatisticLine text='bad' value={ratings.bad} />
        <StatisticLine text='all' value={sum} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={percentageOfGood} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const states = {
    good: `${good}`,
    neutral: `${neutral}`,
    bad: `${bad}`,
  }

  const handleClick = (button) => {
    if (button == "good") {
      setGood(good + 1)
    } else if (button == "neutral") {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <Title text='give feedback'></Title>
      <Button handleClick={() => handleClick("good")} text='good'></Button>
      <Button
        handleClick={() => handleClick("neutral")}
        text='neutral'
      ></Button>
      <Button handleClick={() => handleClick("bad")} text='bad'></Button>
      <Title text='statistics'></Title>
      <Statistics states={states}> </Statistics>
    </div>
  )
}

export default App
