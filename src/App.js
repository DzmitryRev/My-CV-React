import React from "react";
import "./scss/main.scss";
import { Header, Footer, Sidebar } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
