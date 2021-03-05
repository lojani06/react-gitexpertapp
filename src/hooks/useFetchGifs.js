//custon hooks son los que hacen el trabajo pesado

import React,{useEffect, useState} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {


   const [state, setstate] = useState({
       data:[],
       loading:true
   })
   
   useEffect(()=>{
       getGifs(category).then(imgs=>{
                console.log(imgs)
                setstate({
                    data:imgs,
                    loading:false}
                )
       })
   },[category])

  
   return state
}

