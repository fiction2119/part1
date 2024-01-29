const Header = (props) => {
  console.log(props.name.name)
  return (
    <>
      <h1>{props.name.name}</h1>
    </>
  )
}

const Total = (props) => {
  console.log(props.parts.parts)

  return (
    <>
      <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
    </>
  )
}

const Part = (props) => {
  console.log(props.part, props.exercises)
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  
  console.log(props.parts.parts[0].name)
  return (
    <>
      <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
    </>
  ) 
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course} />
      <Content parts={course} />
      <Total parts={course}/>
    </div>
  )
}


export default App
