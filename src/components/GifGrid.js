//import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItme from "./GifGridItme";

export const GifGrid = ({ category }) => { // !!asi se pasa una variable/objeto desde otro componente

  const {data:images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className=" animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash"></p>}

      <div className="card-grid animate__fadeInUp">
        {images.map((img) => (
          <GifGridItme
            key={img.id}
            {...img} //  funciona para poder usarlo y desestructurarlo
          /> // en otro componente
        ))}
      </div>
    </>
  );
};

export default GifGrid;
