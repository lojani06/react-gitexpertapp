import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GrifGridItem} from '../components/GrifGridItem'


export const GitGrid =  ({category}) => {

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //    getGifs()
    //    getGifs(category).then(setImages)//.then se utiliza cuando retorna una promesa async

    // }, [category])
    const {data:images,loading} = useFetchGifs(category)

   



  
  
    return (
        <>
        <h3>{category}</h3>
        {loading&&<p>Cargando</p>}
        <div className="card-grid">  
            {
                    images.map( (img)=>
                     (
                       <GrifGridItem
                        key={img.id}
                       {...img}/>
                    ))
                }
           
        </div>
        </>
    )
}

