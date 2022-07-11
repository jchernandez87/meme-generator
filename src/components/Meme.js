import "../styles/meme.css";

function Meme(props) {
  return (
    <div className="meme-contain">
      <span className="top-text">{props.topText}</span>
      <span className="bottom-text">{props.botText}</span>
      <img className="meme-img" src={props.image} alt="meme" />
    </div>
  );
}

export default Meme;
