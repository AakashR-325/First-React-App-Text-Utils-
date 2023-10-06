import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("OnChange button was pressed");
    setText(event.target.value);
  }
  const handleUpClick = () => {
    console.log("Uppercase button was pressed");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    console.log("Lowercase button was pressed");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    console.log("Clear Text button was pressed");
    setText("");
  }
  const[text , setText] = useState("");
  return (
    <>
      <div className="container">
      <h1 style={props.myStyle}>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
      </div>

      <div className="container my-5">
        <h1  style={props.myStyle}>Text Summary :</h1>
        <p style={props.myStyle}># {text.split(" ").length} words and {text.length} characters</p>
        <p style={props.myStyle}># Approx. time taken to read the text : {(text.split(" ").length * 0.008)} minutes</p>
        <h2 style={props.myStyle}>Preview</h2>
        <p style={props.myStyle}>{text.length>0?text:"Enter your text in the above box to preview here"}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {heading : PropTypes.string}
