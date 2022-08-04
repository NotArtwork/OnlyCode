

const Code = ({ name, code, bounty}) => {
    return(
        <li>
            <h3>{name}</h3>
            <h4 style={{textDecoration: 'underline'}}>Code</h4>
            <p> {code}</p>
            <p>Cash Value: {bounty}</p>
        </li>
    )
}

export default Code;