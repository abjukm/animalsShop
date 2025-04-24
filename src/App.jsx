import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import Birds from "./pages/Birds";
import Fishes from "./pages/Fishes";
import Intro from "./components/Intro";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/fishes" element={<Fishes />} />
        </Routes>
      </Router>
      <Main />
    </>
  );
}

export default App;
