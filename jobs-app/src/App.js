import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import JobList from "./Jobs/JobList"
import MyJobsList from "./MyJobs/MyJobsList"
import Login from "./Login"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<JobList />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/myjobs" element={!localStorage.getItem("token") ? <Navigate to="/login" /> : <MyJobsList />} />
    </Routes>
  );
}

export default App;
