import "../styles/form.css";
import myMemes from "../data/memesData";

function Form() {
  let memeImage;
  
  const handleClick = () => {
    const memesArr = myMemes.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArr.length);
    memeImage = memesArr[randomMeme].url;
  };

  return (
    <div className="form">
      <div className="inputs-contain">
      <p>{memeImage}</p>
        <input type="text" placeholder="Insert text" />
        <input type="text" placeholder="Insert text" />
      </div>
      <button onClick={handleClick} type="button">
        Get a new meme image
      </button>
    </div>
  );
}

export default Form;
