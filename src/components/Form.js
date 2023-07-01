import React, { useState } from "react";

function Form({ formData, handleChange, handleSubmit }) {

    function onSubmitClick(e) {
        e.preventDefault();

        handleSubmit();
    }

    return (
        <>
            <form className="form" onSubmit={onSubmitClick}>
                <input className="text-input" type="text" onChange={handleChange} value={formData.name} name="name" placeholder="name"></input>
                <input className="text-input" type="text" onChange={handleChange} value={formData.image} name="image" placeholder="image URL"></input>
                <input className="text-input" type="text" onChange={handleChange} value={formData.notes} name="notes" placeholder="notes"></input>
                <input className="submit" value="submit" name="submit" type="submit"/>
            </form>
        </>
    )
}

export default Form;