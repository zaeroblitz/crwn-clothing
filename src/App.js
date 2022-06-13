import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import SignIn from "./routes/sign-in/SignIn";
import Navigation from "./routes/navigation/Navigation";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
