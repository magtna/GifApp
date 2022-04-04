import { useState } from "react"
import PropTypes from 'prop-types'


export const AddCategory = ( {setCategories} ) => {// setCAtegories recibe la varivable 
    
    const [inputValue, setInputValue] = useState('hola mundo');//dejarlo vacio regresa undefined 
    const handleInputChange = (e) => setInputValue(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();  // elimina el evento de recarga por defecto

        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue,...cats]); // agrgamos datos a un arreglo
            setInputValue('');
        }  
        
    }
    
   return (
    <> 
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange = {handleInputChange}
        />
    </form>

    </>
  )
}
// activamos el prop types, tomando mayor control de las variables

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;