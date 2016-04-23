import React, { Component, PropTypes } from 'react'

export default class KeyFrame extends Component {

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

KeyFrame.FRAME_HEIGHT = 15

KeyFrame.propTypes = {
    x    : PropTypes.number.isRequired,
    y    : PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }
