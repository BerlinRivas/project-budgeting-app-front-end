// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Index from "./pages/Index.js";
import New from "./pages/New.js";
import Show from "./pages/Show.js";
import "./App.css"

// COMPONENTS
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<Show />} />
            <Route path="/transactions/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
