import CallbackForm from "../CallbackForm/CallbackForm";
import "./Header.css";

import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header" id="header">
      <NavBar></NavBar>
      <CallbackForm />
    </header>
  );
}

export default Header;
