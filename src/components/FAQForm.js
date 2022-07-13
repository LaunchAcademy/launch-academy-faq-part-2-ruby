import React, { useState } from "react"

const FAQForm = (props) => {

    const [formFields, setFormFields] = useState({
        question: "",
        answer: ""
    })

    console.log(formFields)

    const handleInputChange = (event) => {
    
        setFormFields({
            ...formFields,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const whenTheFormSubmits = (event) => {
        event.preventDefault()

        props.addNewQuestion(formFields)

        setFormFields({
            question: "",
            answer: ""
        })
    }

    return(
        <div className="form-container">
            <h1>Add New FAQ</h1>

            <form className="grid-x form" onSubmit={whenTheFormSubmits}>
                <label> Question:
                    <input 
                        type="text" 
                        name="question" 
                        onChange={handleInputChange} 
                        value={formFields.question}
                    />
                </label>

                <label> Answer:
                    <input 
                        type="text" 
                        name="answer"
                        onChange={handleInputChange} 
                        value={formFields.answer}
                    />
                </label>

                <input type="submit" value="Add FAQ" />
            </form>
        </div>
    )
}

export default FAQForm