import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import './App.css'
import './media.css'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import Home from './Page/Home'
import Features from './Page/Features'
import Doc from './Page/Doc'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/doc'>
          <Doc />
        </Route>
        <Route path='/features'>
          <Features />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
