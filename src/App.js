import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

         <Header />

        <Routes>
        <Route path="/" element={
        <div>
            <h1>Home</h1>
          </div>
        } />
        <Route path="new-game" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
