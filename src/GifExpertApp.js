import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    // const categories = ['One Punch','Samurai X', 'Drangon Ball'];
    const[categories,setCategories] = useState(['Rick and Morty']);
    
    // const handleAdd = () =>{
        //setCategories((categories)=> categories.push('HuntterxHunter'))
      //  setCategories(categories.push('HuntterxHunter'));
      //  setCategories([...categories,'HunterxHumter']);
      //  setCategories(cats => [...cats, 'HunterxHunter']);
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => 
                    (<GifGrid 
                        key={category}
                        category ={category}/>)
                    )
                }
            </ol>
        </>

    )

}