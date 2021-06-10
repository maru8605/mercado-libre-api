
function Error (props){
    const errorValue = props.errorValue

    return(
        <section className='error'>
            <h2>Upps. error {errorValue}</h2>
            <p>Por favor, realiza una nueva búsqueda</p>
        </section>
    )
}

export default Error;