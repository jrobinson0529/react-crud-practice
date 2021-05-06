import React, { useState } from 'react';
import { Button } from 'reactstrap';

function Counter() {
  const [counter, setCounter] = useState(Number(1));
  const [userInput, setUserInput] = useState(Number(1));
  const handleClick = (type) => {
    switch (type) {
      case 'add':
        setCounter((prevState) => prevState + userInput);
        break;
      case 'subtract':
        if (counter <= 0) {
          setCounter(0);
        } else {
          setCounter((prevState) => {
            if ((prevState - userInput) <= 0) {
              setCounter(0);
            } else {
              setCounter(prevState - userInput);
            }
          });
        }
        break;
      default:
    }
  };
  return (
    <div>
      <h1>{counter}</h1>
      <Button color='info' onClick={() => handleClick('add')}>Increment</Button>
      { counter <= 0 ? '' : <Button color='danger' onClick={() => handleClick('subtract')}>Decrement</Button>}

      <form>
        <input type='number' onChange={(e) => setUserInput(Number(e.target.value))}/>
      </form>
    </div>
  );
}

export default Counter;
