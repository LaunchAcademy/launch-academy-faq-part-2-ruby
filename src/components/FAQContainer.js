import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm'

const FAQContainer = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  //part 1
  //add get fetch
  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const questionData = await response.json()
      setQuestions(questionData)
    } catch(err) {
      //throw error
    }
  }
  useEffect(() => {
    fetchQuestions()
  }, [])

  //part 2
  //add post fetch
  //pass post fetch to question form
const handleQuestionAdd = async (formPayload) => {
  try {
    const response = await fetch("/api/v1/questions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const body = await response.json()
    const currentQuestion = questions
    setQuestions(currentQuestion.concat(body))
  } catch(err) {
    //throw error
  }
}


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

    let handleClick = () => { toggleQuestionSelect(question.id) }

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

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <QuestionForm handleQuestionAdd={handleQuestionAdd} />
      <div className='question-list'>
        {questionListItems}
      </div>
    </div>
  )

}

export default FAQContainer;
