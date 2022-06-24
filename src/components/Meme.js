import "../styles/meme.css";

function Meme(props) {
  return (
    <div className="meme-contain">
      <span className="top-text">SHUT UP</span>
      <span className="bottom-text">AND TAKE MY MONEY</span>
      <img className="meme-img" src={props.image} alt="meme" />
    </div>
  );
}

export default Meme;
