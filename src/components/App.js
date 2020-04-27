import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Login from './Login'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App container">
          {this.props.user
            ? <Link to="/logout">Logout</Link>
            : <Link to="/login">Login</Link>
          }
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route render={() => <h2>Page not found.</h2>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
