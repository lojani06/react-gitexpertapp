import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function AddCategory({setCategorias}) {

    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault()//evitar que la pagina cargue por default

        if (inputValue.trim().length> 2) {
            setCategorias(cat=>[inputValue,...cat])
            setInputValue('')
        }
        
    }

    return (
     
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
       
    )
}

AddCategory.propTypes={
    setCategorias: PropTypes.func.isRequired
}