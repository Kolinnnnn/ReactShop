import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../ProductContext";
import React from "react"

export function ForgotPassword() {
    const [email,setEmail] = useState("")

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(e);
        e.preventDefault()
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input value={email} onChange={(e) =>setEmail(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}