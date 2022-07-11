import "../styles/form.css";

function Form(props) {
  return (
    <div className="form">
      <div className="inputs-contain">
        <input
          onChange={props.myChange}
          name="topText"
          type="text"
          placeholder="Insert text"
          value={props.topText}
        />
        <input
          onChange={props.myChange}
          name="bottomText"
          type="text"
          placeholder="Insert text"
          value={props.botText}
        />
      </div>
      <button onClick={props.myEvent} type="button">
        Get a new meme image
      </button>
    </div>
  );
}

export default Form;
