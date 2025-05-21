import "./App.css";
import { Route, Routes } from "react-router";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Prices from "../Prices/Prices";
import Experience from "../Experience/Experience";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/osteo" element={<About />} />
        <Route path="/osteo/certificates" element={<Experience />} />
        <Route path="/osteo/contacts" element={<Contacts />} />
        <Route path="/osteo/prices" element={<Prices />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
