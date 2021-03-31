import React, { useState } from 'react'

const QuestionForm = props => {

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="Question">
        Question:
        <input 
          type="text" 
          id="question" 
          name="question"
        />
      </label>

      <label htmlFor="Answer">
        Answer:
      <input 
        type="text" 
        id="answer" 
        name="answer"
      />
      </label>

      <input type="submit" value ="Submit Question"/>
    </form>
  )
}

export default QuestionForm