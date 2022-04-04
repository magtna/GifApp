import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
    //const categories = ['one punch', 'samurai x', 'fubuki'];
    const [categories, setCategories] = useState([]);
    //const handleAdd = () => {
        //setCategories([...categories,'tatsumaki']);
        //setCategories( cats => [...cats, 'tatsumaki']);
    //}
  return (
    <>
        <h2>GifExpertApp</h2>
        < AddCategory setCategories = {setCategories}/>
        <hr/>
        <ol>
            {
                categories.map( category => (// siempre necesita una key
                    <GifGrid 
                    category = {category}
                    key = {category}/> ))
            }
            
        </ol>
    </>

  )
}
