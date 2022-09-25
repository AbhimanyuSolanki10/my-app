import { getElementError } from '@testing-library/react';
import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("upperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case !" , "success")
    }
    const handleLoClick = () => {
        console.log("lowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase !" , "success")
    }
    const handleClearClick = () => {
        console.log("clear " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is clear now!" , "success")

    }
    const handleRedClick = () => {
        console.log("clear " + text);
        document.querySelector('body').style.backgroundColor = "red"
        props.showAlert("Red background is enable!" , "success")


    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)


    }

    const handleCopy = () => {
        console.log("I am copy");
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied!" , "success")


    }
    const handleExtraSpaces = () => {
        console.log("I am space remover");
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!" , "success")

    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ color:  props.mode === 'dark' ? 'white' : '#042743'  }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor:  props.mode === 'dark' ? 'gray' : 'white' , color:  props.mode === 'dark' ? 'white' : 'black'  }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRedClick}>Red Background</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743'  }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
            </div>
        </>
    )
}
