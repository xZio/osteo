import "./App.css";
import { Route, Routes } from "react-router";
import Main from "../Main/Main";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Prices from "../Prices/Prices";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
