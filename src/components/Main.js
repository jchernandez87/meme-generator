import "../styles/main.css";
import Form from "./Form";

function Main() {
  return (
    <div className="main">
      <Form />
      <span className="top-text">SHUT UP</span>
      <span className="bottom-text">AND TAKE MY MONEY</span>
      <img className="meme-img" src="img/meme.png" alt="meme" />
    </div>
  );
}

export default Main;
