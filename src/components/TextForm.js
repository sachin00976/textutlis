import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text==='')
        {
            props.showalert("First enter the text","warning")
        }
        else
        {
            props.showalert("Converted to uppercase","success")
        }
    };

    const handleCopy = () => {
        
        if(text==='')
            {
                props.showalert("First enter the text","warning")
            }else
            {
                var textbox = document.getElementById("mybox");
                textbox.select();
                navigator.clipboard.writeText(textbox.value);
                props.showalert("Copied to ClipBoard","success")
            }
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text==='')
            {
                props.showalert("First enter the text","warning")
            }
            else
            {
                props.showalert("Converted to lowercase","success")
            }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const textarea = document.getElementById("mybox");
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        const searchQuery = selectedText || text; // Fallback to the full text if no text is selected
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(searchUrl, '_blank');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style= {{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="container">
                    <textarea
                        name="textbox"
                        id="mybox"
                        className="form-control"
                        rows="8"
                        placeholder='Enter your text here:'
                        value={text}
                        onChange={handleOnChange}
                        style= {{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}
                    ></textarea>
                    <br />
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert TO Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert TO Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-primary mx-2' onClick={handleSubmit}>Search on Google</button>
                </div>
            </div>
            <div className="container my-3" style= {{color:props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <ul>
                    <li><p>Words: {text.split(" ").filter(word => word !== "").length}</p></li>
                    <li><p>Characters: {text.length}</p></li>
                </ul>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
