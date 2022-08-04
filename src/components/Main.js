import CodeEditor from './CodeEditor'
import CodeList from './CodeList'
import { useState } from 'react'
import './code.css'

const Main = ( {code} ) => {

  const [currentCode, setCurrentCode] = useState('')


  
  return (
    <div className='main'>
      <CodeEditor code={code} currentCode={currentCode} setCurrentCode={setCurrentCode} />
      <CodeList code={code} setCurrentCode={setCurrentCode} currentCode={currentCode}/>
    </div>
  )
 
  
}

export default Main