import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import TabledPage from "./pages/TABLED";
import Y2kore from "./pages/y2kore";
import eek from "./pages/eek";
import CustomCursor from "../components/CustomCursor";
import Eek from "./pages/eek";
import VolcanoExplorer from "./pages/VolcanoExplorer";
import MotionGraphics from "./pages/MotionGraphics";

function App() {
  return (
    <>
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tabled" element={<TabledPage />} />
        <Route path="/y2kore" element={<Y2kore />} />
        <Route path="/eek" element={<Eek />} />
        <Route path="/volcanoexplorer" element={<VolcanoExplorer />} />
        <Route path="/motiongraphics" element={<MotionGraphics />} />
      </Routes>
    </>
  );
}

export default App;
