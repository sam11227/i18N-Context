import React from "react";
import BookList from "./components/BookList";
import ThemeContextProvider from "./components/context/ThemeContext";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./components/Themetoggel";
import i18next from "i18next";
import LanguageOptions from "./components/Language-DropDown";
import AuthContextProvider from "./components/context/AuthContext";
import BookContextProvider from "./components/context/BookContext";

function App() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  <LanguageOptions onChange={(e) => handleClick(e)} />;
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <div style={{display:"flex" ,justifyContent: "space-between"}}>
            <LanguageOptions onChange={(e) => handleClick(e)} />
            <ThemeToggle />
          </div>
          <h1>{t("wellcome")} i18Next</h1>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
