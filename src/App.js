import React, { Component } from 'react'
import { profileActions } from './Actions/profileAction'
import { connect } from 'react-redux'
import profileReducer from './Actions/profileReducer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputvalue: ''
    }
  }
  onChange = e => {
    this.setState({
      inputvalue: e.target.value
    })
  }
  onClick = () => {
    const { profileActions } = this.props
    profileActions({
      name: this.state.inputvalue,
      emailId: 'dsfsdf'
    })
  }
  render () {
    const { profile } = this.props

    return (
      <>
        <input onChange={this.onChange} value={this.state.inputvalue} />
        <div>
          {profile.map(profile => [profile.name, '-', profile.emailId])}
        </div>
        <button onClick={this.onClick}>Submit</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    profile: state.profileReducer.profileDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    profileActions: profiledet => dispatch(profileActions(profiledet))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
