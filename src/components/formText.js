import React, {useState} from "react";

function FormText(props){
    
    const handleUppercaseClick=(event)=>{
        
       setText(text.toUpperCase());
    }
    
    const handleLowercaseClick=(event)=>{
 
        setText(text.toLowerCase());
    }
    const handleClearClick=()=>{
        let newTxt="";
        setText(newTxt);
    }
    
    const handleTrimClick=()=>{
        setText(text.split(" ").join(""));
    }

    const handleReverseClick=()=>{

        setText(text.split("").reverse().join(""));
    }
    const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");
}
const handleSpaceClick=()=>{
    
    setText(text.split(/[ ]+/).join(" "));

    }


    const handleTyingChange=(event)=>{
        
        setText(event.target.value);
    }

    const [text,setText]=useState('');
    
    return (
        <>
        <div className="container" >
        <h1>{props.heading}</h1>   
        <div className="mb-3">
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleTyingChange} id="textBox" rows="9" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white' }}> </textarea>
        
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowercaseClick}>lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleTrimClick}>Remove Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>

            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <div className="mb-3 my-3">
            </div>
        </div>
        </div>

        <div className="container">
            <h5>Text Summary:</h5>
            <p>{(text.split(/\s+/).filter(function(n){ return n !== '' }).length)} words and {text.length} charcaters</p>  
            <hr/>
            <p>
                <h5>{text.length<=0?``:`Preview:`}</h5>
                {text}
            </p>
            
        </div>
        </>
    );

}
export default FormText;