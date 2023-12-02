import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="md:w-[1440px] md:mx-auto overflow-">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
