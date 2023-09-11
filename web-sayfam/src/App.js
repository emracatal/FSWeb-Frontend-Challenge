import "./App.css";
import WebSiteProvider from "./contexts/webSiteContext.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  
  return (
    <WebSiteProvider>
      <div className="App">
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </WebSiteProvider>
  );
}

export default App;
