
function Button (props){
    function handleClick(){
        props.clickCallback()
    }

    return <button onClick={handleClick}>Buscar</button>
}

export default Button