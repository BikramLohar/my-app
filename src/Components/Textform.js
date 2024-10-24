import React, { useState } from 'react'


export default function Textform(props) {


    const handleUpClick = () => {
        // console.log("button clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.Showalert("Converted to UpperCase","success");
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.Showalert("Converted to LowerCase","success");
    }

    const handleOnChange = (event) => {
        // console.log("Onchange");
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const reverse = () => {

        let NewArr = '';
        for (let i = text.length - 1; i >= 0; i--) {
            NewArr += text[i];

        }
        setText(NewArr);
    }
    const removeExtraSpace = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }
    // const wordCount=()=>{
    //     let word=0;
    //     if(text.length)
    // }

    const [text, setText] = useState("Enter your Text here");


    return (
        <>
            <div className="container" style={{ color: props.changeMode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.changeMode === 'dark' ? 'grey' : 'white',
                            color: props.changeMode === 'dark' ? 'white' : 'black'
                        }}
                        id="exampleFormControlTextarea1" rows="8"></textarea>

                </div>

                <button className='btn btn-primary me-2' onClick={handleUpClick}>Conevrt to Uppercase</button>
                <button className='btn btn-primary me-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary me-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary me-2' onClick={reverse}>Reverse Text</button>
                <button className='btn btn-primary me-2' onClick={removeExtraSpace}>Remove Space</button>


                {/* handleClearClick */}
            </div>

            <div className='container my-3' style={{ color: props.changeMode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>Reading time {0.008 * text.split(" ").length} ms</p>
                <h2>Preview</h2>
                <p>{text.length>0 ?text:"Write some text to preview here"} </p>


            </div>
        </>
    )
}
