import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
