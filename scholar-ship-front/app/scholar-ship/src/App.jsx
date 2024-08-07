import './App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Form from "./pages/Form";
import User from "./pages/User";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/user/:username" element={<User></User>}></Route>
          <Route path="/search/:search" element={<Search></Search>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
