

const Header = (props) => {
  console.log(props.course)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
  
}


const Content = (props) => {
  return (
    <div>
      <Part part= 'Fundamentals of React' exercises= '10'/>
      <Part part= 'Using props to pass data' exercises= '7'/>
      <Part part= 'State of a component' exercises= '14'/>
      
    </div>
  )
}

const Total = (props) => {
  console.log(props.number)
  return(
    <div>
      <p>Number of exercises {props.number}</p>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
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
      <Header course={course.name}/>
      <Content/>
      <Total number = {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
      
    </div>
  )
}

export default App