
import './App.css';
import Baitap1 from './Baitap/Baitap1';
import Baitap2 from './Baitap/Baitap2';
import Baitap3 from './Baitap/Baitap3';
import Baitap5 from './Baitap/Baitap5';


import DemoJSX from './components/DemoJSX';
import ParentComp from './components/ParentComp';


function App() {
  return (
    <div className="App">
      {/* gọi component để sử dụng */}
      {/* <DemoJSX/> */}
      {/* <ParentComp></ParentComp> */}
      {/* <Baitap1></Baitap1> */}
      {/* <Baitap2></Baitap2> */}
      {/* <Baitap3></Baitap3> */}
      <Baitap5></Baitap5>



    </div>
  );
}


export default App;

