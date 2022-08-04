import { render } from 'react-dom';
import AceEditor from 'react-ace';
import { useState } from 'react'
import './code.css'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";


const CodeEditor = ( {code} ) => {


    const [currentCode, setCurrentCode] = useState('')

    const [codeInfo, setCodeInfo] = useState({})


    const handleInput = (name, value) => {
        setCodeInfo({
            ...codeInfo,
            [name]: value
        })
    }
    console.log(codeInfo)


    const onChange = (newValue) => {
        setCurrentCode(newValue);
        console.log(currentCode)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postCodeData = async (info) => {
            let req = await fetch('http://localhost:3001/code/', {
                method: 'POST',
                Accept: 'application/json',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(info)
            })
            let res = req.json()
        }
        console.log(codeInfo)
        postCodeData(codeInfo)
    }

    return (
        <div id='ace-solarized-dark'>

        <AceEditor
            mode="javascript"
            theme="ace-solarized-dark"
            onChange={onChange}
            name="code"
            value={currentCode}
            keyboardHandler='vim'
            editorProps={{ $blockScrolling: true }}
            />
                <form id='code-submit-form'>
                <label>Code Title:</label>
                <input type='text' placeholder='Insert Code Title' name='name'onChange={(e) => handleInput(e.target.name, e.target.value)} />
                <label>Code:</label>
                <input type='text' placeholder='Code will type its self' name='code' value={currentCode} onChange={(e) => handleInput(e.target.name, e.target.value)}/>
                <label>Bounty:</label>
                <input type='number' name='bounty' onChange={(e) => handleInput(e.target.name, e.target.value)} />
                <label>Language</label>
                <select onChange={(e) => handleInput('lang',e.target.value)}>
                    <option>Select</option>
                    <option value='javascript'>Javascript</option>
                    <option value='python'>Python</option>
                    <option value='ruby'>Ruby</option>
                </select>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
    
        </div>
    );
}

export default CodeEditor;