import './App.css';

import DivergentBarChart from './pages/DivergentBarChart';

// import BarChart from './pages/BarChart';
// import HorizontalBarChart from './pages/HorizontalBarChart';

function App() {
  return (
    <div className="App">
      {/* 条形图 */}
      {/* <BarChart></BarChart> */}
      {/* 水平条形图 */}
      {/* <HorizontalBarChart></HorizontalBarChart> */}
      {/* 发散条形图 */}
      <DivergentBarChart></DivergentBarChart>
    </div>
  );
}

export default App;
