import React from "react";
import NavBar from "../components/Navbar";
import useform from "react-hook-form"; // se instalo react-hook-form " npm install react-hook-form"
import { Label } from "@mui/icons-material";
import { Input } from "@mui/material";

const ContactPage = () => {

    const { register, formState: {errors}, handlesubmit } = useform();
    //ese encarga de guardar los datos 
    const onSubmit =(data) => {
        console.log(data);
    }
    
    return<div>
        <h2> contactPage </h2>
        <form onSubmit={handlesubmit(onSubmit)}>
            <div>
                <label> Name </label>
                <input type="text" {...register("name", {
                    required: true,
                    maxLength: 22 
                })}/>
                {errors.nombre?.type=== "required" && <p> El campo nombre es requerido</p>}
                {errors.nombre?.type=== "maxLength" && <p> exediste el numero de letras</p>}
            </div>
            <div>
                <label> email </label>
                <input type="text" {...register("email", {
                    // en el email es dificil crear requerimientos de escritura del coreeo 
                })}/>
            </div>
            <div>
                <label> Number </label>
                <input type="text" {...register("Number", {
                    required: true,
                    maxLength: 10 
                })}/>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default ContactPage
