import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
