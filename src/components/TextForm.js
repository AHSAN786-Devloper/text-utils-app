import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Uppercase!', 'Success')
  }
  const handleLoClick = () => {
    // console.log('Uppercase was clicked' + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lowercase!', 'Success')
  }
  const handleOnchange = (event) => {
    setText(event.target.value)
  }
  const handleClearClick = () => {
    let newText = ' '
    setText(newText)
    props.showAlert('Text Clear', 'Success')
  }
  const handleCopy = () => {
    const text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Copeid to clipboard!', 'Success')
  }
  const [text, setText] = useState('')
  //   setText("new text"); correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'grey',
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'white' : 'grey',
              color: props.mode === 'dark' ? 'grey' : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert UperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === 'light' ? 'grey' : 'white',
        }}
      >
        <h2> Your Text Summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(' ').length} Minute read</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
