import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
   <BrowserRouter>
   <Switch>
<Route component={Home} path='/' exact/>
<Route component={About} path='/about' />
   </Switch>
   </BrowserRouter>

  )
}

export default App