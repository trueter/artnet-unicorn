import React, { Component, PropTypes } from 'react'

export default class KeyFrame extends Component {

  static FRAME_HEIGHT = 15

  static propTypes = {
    x    : PropTypes.number.isRequired,
    y    : PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
  }

  shouldComponentUpdate( nextProps ) {
    return this.props.x !== nextProps.x
      || this.props.width !== nextProps.width
      || this.props.selected !== nextProps.selected
  }

  render() {
    const { x, y, width, handleMouseDown, selected } = this.props

    const style = {
      fill       : selected ? 'red ': '#7f8c8d',
      strokeWidth: 1,
      cursor     : 'pointer'
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
        onMouseDown={ handleMouseDown }
      />
    )
  }
}
