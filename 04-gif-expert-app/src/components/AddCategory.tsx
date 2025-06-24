import { useState } from "react"


interface AddCategoryProps { //creamos un ainterfaz que le diga a Typescript que onNewCategory es una function
    onNewCategory: (category: string) => void;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length <= 1) return; //si está vacio no se agrega

        console.log(newValue);
        onNewCategory(newValue);
        //setCategories((categories: string[]) => [...categories, inputValue]);
        setInputValue(''); //limpiamos el input
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <div className="row mt-3">
            <div className="col">
                <input type="text" className="form-control"  placeholder="Buscar gifs" value={inputValue} onChange={onInputChange}/>
            </div>
            <div className="col-auto">
            <button type="submit" className="btn btn-primary" > Agregar</button>
            </div>

        </div>       
    </form>


    )
}
