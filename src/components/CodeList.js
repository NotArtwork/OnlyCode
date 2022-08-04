import Code from "./Code"





const CodeList = ({code}) => {
    console.log(code)


    return(
        <ul id='code-card'>
        {code?.map((snip) => {
            return (
            <Code 
            name={snip.name}
            code={snip.code}
            bounty={snip.bounty} />
            )
        })}
        </ul>
    )
}

export default CodeList