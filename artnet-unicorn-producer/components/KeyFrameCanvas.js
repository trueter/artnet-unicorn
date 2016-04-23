import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import KeyFrame from './KeyFrame'
import * as keyFrameActions from '../reducers/keyFrames'

const mapStateToProps = state => ({
  keyFrames    : state.keyFrames.frames,
  selectedFrame: state.keyFrames.selected
})

export class KeyFrameCanvas extends Component {

  static TRACK_PADDING = 1.5

  static propTypes = {
    selectKeyFrame: PropTypes.func.isRequired,

    selectedFrame: PropTypes.number.isRequired,

    width   : PropTypes.number.isRequired,
    height  : PropTypes.number.isRequired,
    keyFrames: PropTypes.arrayOf(
      PropTypes.shape({
        time    : PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        track   : PropTypes.number.isRequired,
      })
    ).isRequired
  }

  static defaultProps = {
    width      : 400,
    height     : 400,
    scaleFactor: 1 / 10
  }

  constructor( props ) {
    super( props )

    this.renderKeyFrame = ::this.renderKeyFrame
  }

  renderKeyFrame( keyFrame, index ) {

    const props = this.transformTimeToChords( keyFrame )
    // partial application of "index" argument
    props.handleMouseDown = this.props.selectKeyFrame.bind( null, index )
    props.selected = this.props.selectedFrame === index

    return <KeyFrame key={ index } { ...props } />
  }

  transformTimeToChords({ time, track, duration }) {
    const { scaleFactor } = this.props
    return {
      x    : time * scaleFactor,
      y    : ( track * KeyFrameCanvas.TRACK_PADDING ) * KeyFrame.FRAME_HEIGHT,
      width: duration * scaleFactor
    }
  }

  render() {

    const {
      width, height, scaleFactor,
      timeOffset, keyFrames,
      handleKeyFrameDragEnd
    } = this.props

    const endTime = timeOffset + width * scaleFactor

    return (
      <svg
        height={ height }
        width={ width }
        onMouseUp={ handleKeyFrameDragEnd }
      >
        { keyFrames.map( this.renderKeyFrame ) }
      </svg>
    )
  }
}

export default connect( mapStateToProps, keyFrameActions )( KeyFrameCanvas )
