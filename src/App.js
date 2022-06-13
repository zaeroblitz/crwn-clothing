import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Navigation from "./routes/navigation/Navigation";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
