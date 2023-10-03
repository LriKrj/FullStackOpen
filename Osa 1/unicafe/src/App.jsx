import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <table>
    <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good,neutral,bad,total,calcAverage,calcPositive}) => {
  if (total===0){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )

  }
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={calcAverage} />
      <StatisticLine text="positive" value={calcPositive + " %"} />
    </div>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage ] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
    setTotal(total+1)
    setAverage(average+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
    setTotal(total+1)
    setAverage(average-1)
  }
  const calcAverage = average/total
  const calcPositive = good/total*100
  
 


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text= 'Good'/>
      <Button handleClick={handleNeutralClick} text= 'Neutral'/>
      <Button handleClick={handleBadClick} text= 'Bad'/>
      
      <Statistics good = {good} neutral={neutral} bad={bad} total={total} calcAverage={calcAverage} calcPositive={calcPositive}/>
    </div>
  )
}


export default App