import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Counter {
  // count = 0;

  constructor() {
    this.count = 0;
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }
}
const myCounter = new Counter();

const App = observer(({ myCounter }) => {
  return (
    <button onClick={() => myCounter.increase()}>
      the count {myCounter.count}
    </button>
  );
});

import App from './App';

ReactDOM.render(<App myCounter={myCounter} />, document.getElementById('root'));
