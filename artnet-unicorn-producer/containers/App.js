import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as TodoActions from '../actions'
import { FixtureCanvas, KeyFrameCanvas, DevTools } from '../components'

export default class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div>
        {/*<FixtureCanvas />*/}
        <KeyFrameCanvas
          width={ 300 }
          height={ 200 }
        />

      <DevTools />

      </div>
    )
  }
}
