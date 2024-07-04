import React, { useState } from "react"

export function ContactForm() {

    type FormDataType = {
        name: string,
        surname: string,
        email: string,
        topic: string
    }

    type FormDataErrorType = FormDataType&{
        counter: number
    }

    const [submited,setSubmited] = useState<boolean>(false)
    const [error,setError] = useState<FormDataErrorType>()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(e);
        e.preventDefault()
        const isValid = validateData()
        if(isValid == true) {
            setSubmited(true)
            setFormData(deafultState)
        }
    }

    const validateData = () => {
        const error = {
            name : "",
            surname : "",
            email : "",
            topic : "",
            counter: 0
        }
        if(!formData.name) {
            error.name = "Name is required"
            error.counter +=1
        }
        if(!formData.surname) {
            error.surname = "Surname is required"
            error.counter +=1
        }
        if(!formData.email) {
            error.email = "Email is required"
            error.counter +=1
        }
        if(!formData.topic) {
            error.topic = "Topic is required"
            error.counter +=1
        }
        return error.counter===0
    }

    const deafultState:FormDataType = {
        name: '',
        surname: '',
        email: '',
        topic: ''
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, [e.target.name]:e.target.value
        })
        console.log(e);
        console.log(formData);
    }

    const [formData,setFormData] = useState<FormDataType>(deafultState)

    return(
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={formData.name} onChange={handleChange} name="name"></input>
        <label>Surname</label>
        <input type="text" value={formData.surname} onChange={handleChange} name="surname"></input>
        <label>Email</label>
        <input type="email" value={formData.email} onChange={handleChange} name="email"></input>
        <label>Topic</label>
        <input type="text" value={formData.topic} onChange={handleChange} name="topic"></input>
        <button type="submit">Send</button>
        {submited && <p>Thanks for contacting</p>}
        {error && <p>{error.email}</p>}
        </form>
    )
  }