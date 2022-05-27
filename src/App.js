import React from "react";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components";
import { Main } from "./pages";
import { useTranslation } from "react-i18next";

const App = () => {
  //   const { t } = useTranslation();
  //   return (
  //     <>
  //       <h1>{t("title", { ns: "header" })}</h1>
  //     </>
  //   );
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
