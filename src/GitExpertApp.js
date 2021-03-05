import React,{useState} from 'react'
import AddCategory from './components/AddCategory'
import { GitGrid } from './components/GitGrid'

export const GitExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch'])

    // const handleAdd=()=>{
    //     // setCategorias([...categorias,'nuevo elemento '])
    //    setCategorias(cat=>[...categorias,"nuevo"])
    // }




    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>
             

            <ol>
                {
                    categorias.map( category=>
                         (
                         <GitGrid
                            key={category}
                            category={category}
                         />
                    ))
                }
            </ol>
        </>
    )
}
