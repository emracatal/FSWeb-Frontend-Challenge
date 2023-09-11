import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = (dm = darkMode) => {
    console.log(dm);
    document.body.classList.toggle("dark", dm);
    setDarkMode(dm);
  };

  useEffect(() => {
    const initialDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    darkModeHandler(initialDarkMode);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches }) => {
        if (matches) {
          console.log("change to dark mode!");
          darkModeHandler(!true);
        } else {
          console.log("change to light mode!");
          darkModeHandler(!false);
        }
      });
  }, []);
  return (
    <div className="App">
      <span
        className="dark:bg-green dark:bg-greendarkmodedarkmode"
        onClick={() => darkModeHandler(!darkMode)}
      >
        darkside
      </span>
      <Header darkModeHandler={darkModeHandler} />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
