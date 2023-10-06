import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Chat from "./components/Chat";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <About />
      {/* <Chat /> */}
      <Contact />
    </>
  );
}

export default App;
