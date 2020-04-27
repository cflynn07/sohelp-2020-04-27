import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

import { login } from '../actions'

class Login extends Component {
  postLogin = () => {
    const email = $('input[name="email"]').val()
    const password = $('input[name="password"]').val()

    this.props.dispatchLogin(email, password)
  };

  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>email:</th>
              <td><input type="text" name="email"/></td>
            </tr>
            <tr>
              <th>password:</th>
              <td><input type="password" name="password"/></td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={this.postLogin}>Login</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  dispatchLogin: (email, password) => login(email, password)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
