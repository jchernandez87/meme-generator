import "../styles/header.css";
import logo from "../assets/logo.png"

function Header() {
  return (
    <nav className="nav">
      <div className="title-container">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">Meme Generator</h1>
      </div>
    </nav>
  );
}

export default Header;
