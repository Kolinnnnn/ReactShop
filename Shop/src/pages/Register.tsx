import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react"
import { useForm } from "react-hook-form";
import './Register.css';

type FormInputs = {
    username: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInputs>();
    const onSubmit = (data) => {
        console.log(data);
    }

    const password = watch("password");

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                <label>Username</label>
                <input 
                    {...register("username", { 
                        required: "Username is required",
                        minLength: {
                            value: 4,
                            message: "Username must be at least 4 characters long"
                        }
                    })} 
                />
                {errors.username && <p className="error">{errors.username.message}</p>}
                
                <label>Email</label>
                <input 
                    type="email"
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address"
                        }
                    })} 
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
                
                <label>Password</label>
                <input 
                    type="password"
                    {...register("password", { 
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long"
                        }
                    })} 
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
                
                <label>Repeat Password</label>
                <input 
                    type="password"
                    {...register("repeatPassword", { 
                        required: "Repeat password is required",
                        validate: value =>
                            value === password || "Passwords do not match"
                    })} 
                />
                {errors.repeatPassword && <p className="error">{errors.repeatPassword.message}</p>}
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
}