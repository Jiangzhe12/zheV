import './App.css';

// import DivergentBarChart from './pages/DivergentBarChart';
import IntervalBarChart from './pages/IntervalBarChart';

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
      {/* <DivergentBarChart></DivergentBarChart> */}
      {/* 区间条形图 */}
      <IntervalBarChart></IntervalBarChart>
    </div>
  );
}

export default App;
