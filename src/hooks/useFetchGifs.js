import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) =>{

    const [state, setState]=useState({
        data : [],
        loading: true
    })

    useEffect(()=>{

        getGifs(category)
        .then(imgs =>{
            setState({
                data:imgs,
                loading: false
            })
            
        })
    },[category])

  // useEffect (() =>{
    //     getGifs(category)
    //     .then(setImages)
    // },[ category ])


    return state;

}