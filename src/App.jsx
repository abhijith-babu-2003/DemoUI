import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

// Lazy load components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Contact = lazy(() => import("./pages/Contact"));


const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

     
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default App;
