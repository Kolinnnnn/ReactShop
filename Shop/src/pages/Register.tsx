import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react"
import { useForm } from "react-hook-form";

type formInputs = {
    username: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export function Register() {
    const {register,handleSubmit,formState:{errors}} = useForm<formInputs>()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input {...register("username",{required:true})}></input>
            {errors.username && <p>{errors.username.message}</p>}
            <label>Email</label>
            <input type="email"{...register("email",{required:true})}></input>
            {errors.email && <p>{errors.email.message}</p>}
            <label>Password</label>
            <input type="password"{...register("password",{required:true})}></input>
            {errors.password && <p>{errors.password.message}</p>}
            <label>Repeat Password</label>
            <input type="password"{...register("repeatPassword",{required:true})}></input>
            {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
            <button type="submit">Register</button>
        </form>
        </div>
    )
}