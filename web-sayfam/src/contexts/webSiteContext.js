import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

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
        useEffect(() => {
              axios
            .get("https://reqres.in/api/users")
            .then((response) => {
              setAvatar(response.data.data[1].avatar); 
              console.log(response.data.data[1].avatar)
            })
            .catch((error) => {
              console.error(error);
            });
        }, []);
  return (
    <websiteContext.Provider value={{ language, languageHandler, darkModeHandler, darkMode,avatar  }}>{children}</websiteContext.Provider>
  )
}

export default WebSiteProvider


