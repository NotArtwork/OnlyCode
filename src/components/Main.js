import React from 'react'
import CodeEditor from './CodeEditor'
import CodeList from './CodeList'
import './code.css'

const Main = ( {code} ) => {



  
  return (
    <div className='main'>
      <CodeEditor code={code} />
      <CodeList code={code}/>
    </div>
  )
 
  
}

export default Main