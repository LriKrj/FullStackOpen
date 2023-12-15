import { useEffect, useState } from 'react'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setmessage] = useState(null)

  
  useEffect (() => {
    personService
    .getAll()
    .then (response => {
      console.log(response)
      setPersons(response.data)
    }
    )

  }, [])


  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }
    personService
    .create(nameObject)
    .then(response => {
      console.log(response)
      setPersons(persons.concat(response.data))
      setmessage( `Added '${nameObject.name}'`)
      setTimeout(() => {
        setmessage(null)
      }, 5000)

      setNewName('')
      setNewNumber('')
    })

  }
  const HandleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }

  const HandleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)

  }

  const handleDelete = (id, name) => {
    personService
    .remove(id)
    .then(response =>{
      console.log('deleted', response)
      setPersons(persons.filter(person => person.id !== id));
      setmessage( `'${name}' was removed`)
      setTimeout(() => {
        setmessage(null)
      }, 5000)
      
    }

    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={HandleNewName}/>
        </div>
        <div>number: <input value={newNumber} onChange={HandleNewNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}<button onClick={() => handleDelete(person.id, person.name)}>delete</button></li>)}
      </ul>
    </div>
  )

}

export default App