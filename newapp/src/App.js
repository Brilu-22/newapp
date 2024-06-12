import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/home/Home";
import Compare from "./Components/pages/comparedata/Compare";
import Single from "./Components/pages/single";
import Timeline from "./pages/timeline/Timeline";
import "./style/dark.scss";
import { DarkModeContextProvider } from "./context/darkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <section className="hero">
        <div className="app dark">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="compare">
                <Route index element={<Compare />} />
                <Route path=":playerId" element={<Single />} />
              </Route>
              <Route path="timeline">
                <Route index element={<Timeline />} />
                <Route path=":teamId" element={<Single />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </section>
    </DarkModeContextProvider>
  );
}

export default App;
