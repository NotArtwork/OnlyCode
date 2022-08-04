import Code from "./Code"





const CodeList = ({code, setCurrentCode, currentCode}) => {
    console.log(code)


    return(
        <ul id='code-list'>
        {code?.map((snip) => {
            return (
            <Code 
            name={snip.name}
            code={snip.code}
            bounty={snip.bounty}
            setCurrentCode={setCurrentCode}
            currentCode={currentCode} />
            )
        })}
        </ul>
    )
}

export default CodeList