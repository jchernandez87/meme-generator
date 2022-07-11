import "../styles/main.css";
import { useState } from "react";
import Form from "./Form";
import myMemes from "../data/memesData";
import Meme from "./Meme";

function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="main">
      <Form myEvent={handleClick} myChange={handleChange} />
      <Meme
        image={meme.randomImage}
        topText={meme.topText}
        botText={meme.bottomText}
      />
    </div>
  );
}

export default Main;
