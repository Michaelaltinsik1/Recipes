import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import RecipePage from "./Views/RecipePage";
import NoMatchPage from "./Views/NoMatch";
function App() {
  return (
    <div className="wrapper">
      <h1>Recipe site</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
