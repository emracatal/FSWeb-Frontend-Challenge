import React, { createContext, useEffect, useState } from 'react'

export const websiteContext = createContext()

const WebSiteProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        document.body.classList.toggle("dark", !darkMode)
        setDarkMode(!darkMode)
        localStorage.setItem("darkMode", !darkMode);
      }


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

    const [language, setLanguage] = useState("tr")
  
        const languageHandler = () => {
          setLanguage(language === "tr" ? "en" : "tr");
          localStorage.setItem("language", language === "tr" ? "en" : "tr");
        }


    


//   const darkModeHandler = () => {
//     document.body.classList.toggle("dark", !darkMode)
//     setDarkMode(!darkMode)
//   }
//   const getInitialDarkModeState = () => {
//     if (JSON.parse(localStorage.getItem("darkmode")) === true) {
//       return true;
//     } else if (JSON.parse(localStorage.getItem("darkmode")) === false) {
//       return false;
//     } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   const initialState = getInitialDarkModeState();

//   const [darkMode, setDarkMode] = useState(initialState)

//   useEffect(() => {
//     const isDarkModeEnabled = darkMode;
//     if (isDarkModeEnabled) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, []);


//   useEffect(() => {
//     localStorage.setItem("darkmode", JSON.stringify(darkMode));
//   }, [darkMode]);

//   const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "en")

  return (
    <websiteContext.Provider value={{ language, languageHandler, darkModeHandler, darkMode }}>{children}</websiteContext.Provider>
  )
}

export default WebSiteProvider


