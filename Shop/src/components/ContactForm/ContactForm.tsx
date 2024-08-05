import React, { useState } from "react";
import './ContactForm.css';

export function ContactForm() {
    type FormDataType = {
        name: string,
        surname: string,
        email: string,
        topic: string
    };

    type FormDataErrorType = Partial<FormDataType>;

    const [submited, setSubmited] = useState<boolean>(false);
    const [error, setError] = useState<FormDataErrorType>({});
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        surname: '',
        email: '',
        topic: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateData();
        if (isValid) {
            setSubmited(true);
            setFormData({
                name: '',
                surname: '',
                email: '',
                topic: ''
            });
            setError({});
        } else {
            setSubmited(false);
        }
    };

    const validateData = () => {
        const errors: FormDataErrorType = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        if (!formData.surname) {
            errors.surname = "Surname is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        }
        if (!formData.topic) {
            errors.topic = "Topic is required";
        }
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={formData.name} onChange={handleChange} name="name" />
            {error.name && <p className="error">{error.name}</p>}

            <label>Surname</label>
            <input type="text" value={formData.surname} onChange={handleChange} name="surname" />
            {error.surname && <p className="error">{error.surname}</p>}

            <label>Email</label>
            <input type="email" value={formData.email} onChange={handleChange} name="email" />
            {error.email && <p className="error">{error.email}</p>}

            <label>Topic</label>
            <input type="text" value={formData.topic} onChange={handleChange} name="topic" />
            {error.topic && <p className="error">{error.topic}</p>}

            <button type="submit">Send</button>
            {submited && <p>Thanks for contacting</p>}
        </form>
    );
}
