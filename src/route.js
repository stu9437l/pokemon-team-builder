import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages";
import Detail from "./pages/[id]";
import MyTeam from "./pages/my-team";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/my-team" element={<MyTeam />}></Route>
      <Route path="/pokemon/:id" element={<Detail />}></Route>
    </Routes>
  );
};

export default Routing;
