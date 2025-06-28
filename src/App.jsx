import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
