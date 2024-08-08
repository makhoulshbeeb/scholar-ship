import './App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Form from "./pages/Form";
import User from "./pages/User";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Course from './pages/Course';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/user/:username" element={<User/>}></Route>
          <Route path="/search/:search" element={<Search/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/form/:id" element={<Form/>} />
          <Route path="/course/:id" element={<Course/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
