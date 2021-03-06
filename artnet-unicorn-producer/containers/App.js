import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as TodoActions from '../actions'
import { FixtureCanvas, KeyFrameCanvas, DevTools } from '../components'

import '../styles/app.css'

export default class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="app">
        <FixtureCanvas
          width={ 250 }
          height={ 250 }
        />

        <KeyFrameCanvas
          width={ 440 }
          height={ 200 }
        />

      <DevTools />

      </div>
    )
  }
}
