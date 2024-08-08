

function Button({operador, fn}) {

    
    return (
        <button
            type="button"
            className="h-10 w-10 flex items-center justify-center fond-bold bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 text-white text-2Xl"
            onClick={fn}
        >{operador}</button>
    )
}

export default Button
