import { useState } from "react"

const Heading = (props) => {
  return <h1>{props.text}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Highlight = () => {
  
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  let points = new Uint8Array(8)
  const [selected, setSelected] = useState(0) // Store state of selected anecdote
  const [voted, setVoted] = useState(points) // Store state of votes
  const [highestVoted, setHighestVoted] = useState(0)
  const max = anecdotes.length,
    min = 1

  const generateRandomAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    setSelected(randomNumber - 1)
  }

  const addVote = () => {
    const copy = [...voted] // using spread vs copying the array directly makes a difference
    copy[selected] += 1
    setVoted(copy)
    console.log(copy)
  }

  const mostVoted = (votesArray, anecdotes) => {
    const copy = votesArray

    let highestVotes = 0
    let mostVoted;

    for (const votes of copy) {
      if (votes > highestVotes) {
        highestVotes = votes
        mostVoted = copy.indexOf(votes)
      }
    }
    
    return <p>{anecdotes[mostVoted]} has {highestVotes} votes</p> 
  }

  return (
    <div>
      <div>
        <Heading text='Anecdote of the day'></Heading>
        <p>
          {anecdotes[selected]} {voted[selected]}
        </p>
        <Button handleClick={addVote} text='Vote' />
        <Button handleClick={generateRandomAnecdote} text='Next Anecdote' />
      </div>

      <div>
        <Heading text='Anecdote with most votes'></Heading>
        {mostVoted([...voted], anecdotes)}
      </div>
    </div>
  )
}

export default App
