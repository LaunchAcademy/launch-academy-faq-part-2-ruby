import React, { useState } from 'react'

const QuestionForm = props => {

  const [createQuestion, setCreateQuestion] = useState({
    question: "",
    answer: ""
  })

  const handleChange = (event) => {
    setCreateQuestion({
      ...createQuestion,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.log(createQuestion)
    props.handleQuestionAdd(createQuestion)

    setCreateQuestion({
      question: "",
      answer: ""
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="Question">
        Question:
        <input 
          type="text" 
          id="question" 
          name="question"
          onChange={handleChange}
          value={createQuestion.question}
        />
      </label>

      <label htmlFor="Answer">
        Answer:
      <input 
        type="text" 
        id="answer" 
        name="answer"
        onChange={handleChange}
        value={createQuestion.answer}
      />
      </label>

      <input type="submit" value ="Submit Question"/>
    </form>
  )
}

export default QuestionForm