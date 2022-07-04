import React,{useState} from 'react'

export default function TextFrom(props) {

    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text", "danger")
    }
    const handleCopy = ()=>{
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Succesfully copied", "success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    // text = "abcd"; // Wrong way to change the text
    // setText("abcd"); // Right way to change the text
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-info mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleClClick}>Clear Text</button>
            <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-warning mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
