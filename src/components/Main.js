import "../styles/main.css";
import { useState } from "react";
import Form from "./Form";
import myMemes from "../data/memesData";
import Meme from "./Meme";

function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomtext: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [myImages] = useState(myMemes);

  const handleClick = () => {
    const memesArr = myImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  };

  return (
    <div className="main">
      <Form myEvent={handleClick} />
      <Meme image={meme.randomImage} />
    </div>
  );
}

export default Main;
