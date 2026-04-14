import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Home from "./pages/Home";
// import RecipeList from "./pages/RecipeList";
// import RecipeDetail from "./pages/RecipeDetail";
// import SubmitRecipe from "./pages/SubmitRecipe";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/browse" element={<RecipeList />} /> */}
          {/* <Route path="/submit" element={<SubmitRecipe />} /> */}
          {/* <Route path="/recipe/:id" element={<RecipeDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
