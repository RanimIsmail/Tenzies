import './App.css';
import React from 'react';
import Die from './Die';
import { useState , useEffect,useRef} from 'react';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

function App() {

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const rollCount = useRef(0);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore") || 0)
  );

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const oneValue = dice[0].value
    const allSame = dice.every(die=>die.value === oneValue)
        if (allHeld && allSame) {
            setTenzies(true)
            console.log("You won!")
        }
    }
  , [dice])
 

  function allNewDice(){
    const arr = [];
    for(let i=0; i<10; i++)
      {
        arr.push({value: Math.ceil(Math.random()*6),
        isHeld: false,
        id : nanoid()})
      }
      return( arr )
  }

  function generateNewDice(){
    if(tenzies) {
      setDice(allNewDice())
      setTenzies(false)
      if(rollCount.current< bestScore || bestScore===0){
        localStorage.setItem("bestScore" , rollCount.current)
        setBestScore(rollCount.current)
      }
      rollCount.current=0;
    }
    else
      { setDice(oldDice => oldDice.map(
          die=> {
            return die.isHeld ? {...die} : {value: Math.ceil(Math.random()*6),
              isHeld: false,
              id : nanoid()}
          }
        ))
        rollCount.current = rollCount.current+1;
      }
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(
      die => {
       return id===die.id ? {...die, isHeld : !die.isHeld} : {...die}
        }
    ))
    
  }
  const diceArray = dice.map(die=> <Die key= {die.id} value= {die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>)
  
  return (
    <div className="App">
       <h1 className="title">Tenzies</h1>
       <p className="instructions">Roll until all dice are the same. <br /> Click each die to freeze it at its current value between rolls</p>
       <div className='score'>
          <h2 className='rolls'>Rolls: {rollCount.current}</h2>
          {bestScore !== 0 && <h2 className='best'>Best Score: {localStorage.getItem("bestScore")}</h2>}
       </div>
      <div className='die'>
        {diceArray}
      </div>
      <button onClick={generateNewDice}> {tenzies ? "New Game" : "Roll" } </button>
      {tenzies && <Confetti/>}
    </div>
  );
}

export default App;
