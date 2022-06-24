import "../styles/main.css";
import { useState } from "react";
import Form from "./Form";
import myMemes from "../data/memesData";
import Meme from "./Meme";

function Main() {
  const [currentImage, setImage] = useState("");

  const handleClick = () => {
    const memesArr = myMemes.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArr.length);
    const memeImage = memesArr[randomMeme].url;

    setImage(memeImage);
  };

  return (
    <div className="main">
      <Form myEvent={handleClick} />
      <Meme image={currentImage} />
    </div>
  );
}

export default Main;
