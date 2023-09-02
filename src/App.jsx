import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home/Index";
import Blog from "./pages/Blog/index";
import { useState } from "react";
import Gallery from "./pages/Gallery";

function App() {
  const [progress, setProgress] = useState(15);

  const updateProgress = (value) => {
    return setProgress(value);
  };
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar progress={progress} />}>
            <Route index element={<Home setProgress={updateProgress} />} />
            <Route
              path="/blog"
              element={<Blog setProgress={updateProgress} />}
            />
            <Route
              path="/gallery"
              element={<Gallery setProgress={updateProgress} />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
