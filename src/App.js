import React, { useEffect } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

import './style.css';

const App = observer((myCounter) => {
  console.log('my counter', myCounter);
  useEffect(() => {
    // myCounter.increase();
  }, []);

  return (
    <div>
      <button onClick={() => myCounter.increase}>increase</button>
      <h1>{myCounter.count}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
});

export default App;
