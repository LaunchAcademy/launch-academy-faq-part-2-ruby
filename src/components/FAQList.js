import React, { useEffect, useState } from 'react';

import Question from './Question';
import FAQForm from './FAQForm';

const FAQList = (props) => {
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    const questionResponse = await fetch("/api/v1/questions")
    const questionObjectsArray = await questionResponse.json()
    setQuestions(questionObjectsArray)
  }

  // useEffect(callback, array of when to render)
  useEffect(() => {
    getQuestions()
  }, [])

  const addNewQuestion = async (formFieldsState) => {

    const response = await fetch("/api/v1/questions", {
      method: "POST",
      body: JSON.stringify(formFieldsState),
      headers: new Headers({
        "Content-type": "application/json"
      })
    })

    const questionData = await response.json()

    setQuestions(questions.concat(questionData))
  }

  // ------- all of the stuff below here is just stuff from last week, that we dont really need to touch
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    const handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  // ------ the stuff above here we dont really need to touch
  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <div className='question-list'>
        {questionListItems}
      </div>

      <FAQForm 
        addNewQuestion={addNewQuestion}
      />
      
    </div>
  )

}

export default FAQList;
