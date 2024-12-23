import React from 'react'
import { useState, useEffect } from 'react'
import apiURL from './api'


export const AddPage = ({ handleFormSubmit, goToMain }) => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        name: "",
        email: "",
        tags: "",

    });

   function handleFormData (event) {
        event && setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        console.log(formData)
    }


   

  
useEffect(() => {
handleFormData()
}, [])



    return (
        <>
                    <h1 className='wiki'>Wikiverse</h1>

        <div className='Add_Page'>
            <h1>Add an Entry</h1>

    
        
        <form onSubmit ={e => handleFormSubmit(e, formData)} className='form'>  
            <label>
                Title:
                </label>
                <input 
                type = "text"
                className="AddPage_input"
                value = {formData.title}
                onChange={handleFormData}
                name = "title" />
           

            <label>
                Author Content:
                </label>
                <input 
                type = "text"
                className="AddPage_input"
                value = {formData.content}
                onChange={handleFormData}
                name = "content"
                />


            <label>
            Author Name:
            </label>
                <input 
                type = "text"
                className="AddPage_input"
                value = {formData.name}
                onChange={handleFormData}
                name = "name"
                />

            <label>
                Author Email:
                </label>
                <input 
                type = "text"
                className="AddPage_input"
                value = {formData.email}
                onChange={handleFormData}
                name = "email"
                />

            <label>
                Tags
                </label>
                <input 
                type = "text"
                className="AddPage_input"
                value = {formData.tags}
                onChange={handleFormData}
                name = "tags"
                />


            <button className="AddPage_button" type="submit">Create Page</button>
            <button className="AddPage_button"onClick={goToMain}>Back to Main Page</button>

        </form>
        </div>
    
        </>

    )
}