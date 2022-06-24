import "../styles/header.css";

function Header() {
  return (
    <nav className="nav">
      <div className="title-container">
        <img className="logo"  src="img/logo.png" alt="logo" />
        <h1 className="title">Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </nav>
  );
}

export default Header;
