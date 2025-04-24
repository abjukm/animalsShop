import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import Birds from "./pages/Birds";
import Fishes from "./pages/Fishes";
import Intro from "./components/Intro";
import { Main } from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Registr/Section";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/fishes" element={<Fishes />} />
        </Routes>
      </Router>
      <Section />
    </>
  );
}

export default App;
