import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import * as TodoActions from '../actions'
import FixtureCanvas from '../components/FixtureCanvas'
import KeyFrameCanvas from '../components/KeyFrameCanvas'

export default class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div>
        {/*<FixtureCanvas />*/}
        <KeyFrameCanvas
          width={ 600 }
          height={ 400 }
        />
      </div>
    )
  }
}
