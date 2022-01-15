import Navigation from "./Components/Presentational/Navigation";
import BookContainer from "./Components/Stateful/BookContainer";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./styles/css/style.css";
import About from "./Components/Presentational/About";
import NotFound from "./Components/Presentational/NotFound";
import SingleBook from "./Components/Stateful/SingleBook";
import Login from "./Components/Stateful/Login";
import Register from "./Components/Stateful/Register";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
