import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='numbers'>
      <NumberButton buttonStyles={'number'} text={1} />
      <NumberButton buttonStyles={'number'} text={2} />
      <NumberButton buttonStyles={'number'} text={3} />
      <NumberButton buttonStyles={'number'} text={4} />
      <NumberButton buttonStyles={'number'} text={5} />
      <NumberButton buttonStyles={'number'} text={6} />
      <NumberButton buttonStyles={'number'} text={7} />
      <NumberButton buttonStyles={'number'} text={8} />
      <NumberButton buttonStyles={'number'} text={9} />
    </div>
    <div className='operators'>
      <NumberButton buttonStyles={'operator'} text={"/"} />
      <NumberButton buttonStyles={'operator'} text={"x"} />
      <NumberButton buttonStyles={'operator'} text={"-"} />
      <NumberButton buttonStyles={'operator'} text={"+"} />
      <NumberButton buttonStyles={'operator'} text={"="} />
      {/* <ActionButton /> */}
      {/* <CalculatorDisplay /> */}
    </div>
  );
};

export default App;
