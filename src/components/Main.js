import "../styles/main.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import Meme from "./Meme";

function Main() {
  const [allMemes, setAllMemes] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value.toUpperCase(),
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
