import React, { Component, PropTypes } from 'react'

export default class KeyFrame extends Component {

  static FRAME_HEIGHT = 15

  static propTypes = {
    x    : PropTypes.number.isRequired,
    y    : PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  render() {
    const { x, y, width, handleMouseDown } = this.props

    const style = {
      fill       : '#7f8c8d',
      strokeWidth:1
    }

    return (
      <rect
        x={ x }
        y={ y }
        width={ width }
        rx={ 10 }
        ry={ 10 }
        height={ KeyFrame.FRAME_HEIGHT }
        style={ style }
        onMouseDown={ handleMouseDown }
      />
    )
  }
}
