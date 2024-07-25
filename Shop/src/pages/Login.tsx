import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react"

export function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(e);
        e.preventDefault()
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={username} onChange={(e) =>setUsername(e.target.value)}></input>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
            <button type="submit">Log In</button>
        </form>
        <a href="/register">Dont have an account yet? Register here</a>
        <a href="/forgotPassword">Forgot password? Change it here</a>
        </div>
    )
}