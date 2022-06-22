import "../styles/form.css";

function Form() {
  return (
    <div className="form">
      <div className="inputs-contain">
        <input type="text" placeholder="Insert text" />
        <input type="text" placeholder="Insert text" />
      </div>
      <button type="button">Get a new meme image</button>
    </div>
  );
}

export default Form;
