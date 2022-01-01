import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import JobList from "./Jobs/JobList"
import Login from "./Login"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<JobList />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
