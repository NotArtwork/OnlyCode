

const Code = ({ name, code, bounty, setCurrentCode, currentCode}) => {


    const handleClick = () => {
        setCurrentCode(currentCode => code)
    }


    return(
        <li onClick={handleClick} className='code-item'>
            <h3 style={{textDecoration: 'underline'}}>{name}</h3>
            <p className="text"> {code}</p>
            <p>Cash Value: {bounty}</p>
        </li>
    )
}

export default Code;