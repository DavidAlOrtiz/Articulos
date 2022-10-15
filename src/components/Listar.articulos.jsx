import React from "react";
import { useEffect, useState } from "react";

useEffect(() => {
    get()
  },
[]);
const get = () =>{
    const datos = localStorage.getItem(carrito);
    console.log(datos)
}

export const Listado = ({lista}) => {
    return(
        <>
           
        </>
    );
};