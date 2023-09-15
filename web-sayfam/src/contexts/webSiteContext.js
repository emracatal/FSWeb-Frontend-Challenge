import React, { createContext, useEffect, useState } from 'react'

export const websiteContext = createContext()

const WebSiteProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

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
     
        const [avatar, setAvatar] = useState(""); 
        
  return (
    <websiteContext.Provider value={{ language, languageHandler, darkModeHandler, darkMode,avatar  }}>{children}</websiteContext.Provider>
  )
}

export default WebSiteProvider



