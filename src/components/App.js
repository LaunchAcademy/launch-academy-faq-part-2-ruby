import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FAQContainer from './FAQContainer'
import LauncherList from './LauncherList'
import LauncherShow from './LauncherShow'

//Part 3: we will add our browser info here
//Swap out the FAQContainer on main.js


const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={FAQContainer}/>
      <Route exact path="/launchers" component={LauncherList} />
      <Route exact path="/launchers/:id" component={LauncherShow} />
    </BrowserRouter>
  )
}

export default App