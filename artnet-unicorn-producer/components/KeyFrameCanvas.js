import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import KeyFrame from './KeyFrame'

export default class KeyFrameCanvas extends Component {
  static TRACK_PADDING = 1.5

  static propTypes = {
    width   : PropTypes.number.isRequired,
    height  : PropTypes.number.isRequired,
    keyFrames: PropTypes.arrayOf(
      PropTypes.shape({
        time    : PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        track   : PropTypes.number.isRequired,
      })
    ).isRequired,
    selected: PropTypes.array
  }

  static defaultProps = {
    width      : 400,
    height     : 400,
    scaleFactor: 1 / 10
  }

  constructor( props ) {
    super( props )

    this.renderKeyFrame = this.renderKeyFrame.bind( this )
  }

  renderKeyFrame( keyFrame, index ) {

    const props = this.transformTimeToChords( keyFrame )
    props.handleMouseDown = this.props.handleKeyFrameSelection

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

