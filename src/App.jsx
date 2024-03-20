import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import SignUpPage from "./Page/SignUp/SignUpPage";
import APICatalogPage from "./Page/APICatalog/APICatalogPage.jsx";

function App() {
  return (
    // <>
    //   <APICatalogPage />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<APICatalogPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
    // <APICatalogPage />
  );
}

export default App;
