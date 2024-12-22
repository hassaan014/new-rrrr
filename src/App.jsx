import React from 'react'
import Card from './Components/Card/Card'
import { Data } from './data';

const App = () => {
  console.log(Data[0]);
  
  return (
    <>
    <ul>
      {Data ? Data.map((e,i)=>{
        return <li key={i}><Card id={e.id} name={e.name} age={e.age} desc={e.desc} src={e.img} key={i} /></li>
      }): <h1>Nothing</h1>}
      </ul>
    </>
  )
}

export default App