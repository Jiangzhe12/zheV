import './App.css';

import { Button } from 'antd';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RecoilRoot>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <Button type="primary" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </Button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </RecoilRoot>
    </div>
  );
}

export default App;
