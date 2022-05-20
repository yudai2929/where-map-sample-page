import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./index.css";

function App(): JSX.Element {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
