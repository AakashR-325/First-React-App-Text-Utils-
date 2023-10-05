import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  }
  const handleClick = () => {
    console.log("Uppercase was pressed");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const[text , setText] = useState("Enter text here");
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <label htmlFor="myBox" className="form-label"></label>
      <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick = {handleClick}>Convert To Upper Case</button>
  </>
  )
}

TextForm.propTypes = {heading : PropTypes.string}
