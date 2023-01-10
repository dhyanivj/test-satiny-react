import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import Project from './components/Project'
import SinglePost from './components/SinglePost'

const App = () => {
  return (
   <BrowserRouter>
   <Switch>
<Route component={Home} path='/' exact/>
<Route component={About} path='/about' />
<Route component={SinglePost} path='/post/:slug' />
<Route component={Post} path='/post' />
<Route component={Project} path='/project' />

   </Switch>
   </BrowserRouter>

  )
}

export default App