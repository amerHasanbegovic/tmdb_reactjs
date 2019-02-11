import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'
import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/movies' component={Movies} />
              <Route exact path='/tvshows' component={Tvshows} />
              <Route exact path='/people' component={People} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
