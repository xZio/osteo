import "./App.css";
import { Route, Routes } from "react-router";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Prices from "../Prices/Prices";
import Certificates from "../Certificates/Certificates";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
