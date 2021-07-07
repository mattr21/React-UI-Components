import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='calculator'>
    
      <div className='displays'>
        <CalculatorDisplay buttonStyle={'display'} text={'0'} />
      </div>

      <div className='main'>
        <div className='left-buttons'>
          <div className='actions'>
            <ActionButton buttonStyle={'action'} text={'clear'} />
          </div>

          <div className='numbers'>
            <NumberButton buttonStyle={'number'} text={7} />
            <NumberButton buttonStyle={'number'} text={8} />
            <NumberButton buttonStyle={'number'} text={9} />
            <NumberButton buttonStyle={'number'} text={4} />
            <NumberButton buttonStyle={'number'} text={5} />
            <NumberButton buttonStyle={'number'} text={6} />
            <NumberButton buttonStyle={'number'} text={1} />
            <NumberButton buttonStyle={'number'} text={2} />
            <NumberButton buttonStyle={'number'} text={3} />
          </div>

          <div className='actions'>
            <ActionButton buttonStyle={'action actionZero'} text={0} />
          </div>
        </div>

        <div className='operators'>
          <NumberButton buttonStyle={'operator'} text={'/'} />
          <NumberButton buttonStyle={'operator'} text={'x'} />
          <NumberButton buttonStyle={'operator'} text={'-'} />
          <NumberButton buttonStyle={'operator'} text={'+'} />
          <NumberButton buttonStyle={'operator'} text={'='} />
        </div>
      </div>  

      
      
    </div>
  );
};

export default App;
